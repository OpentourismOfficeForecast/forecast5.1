import { ChartData } from '../models/chart-data';
import { ForecastEntry } from '../models/forecast-entry.model';
import * as moment from 'moment';

export class ChartService {

  public static mapToChartData(entries: ForecastEntry[]): ChartData[] {
    return entries.map(e => {
      let date = moment(e.date, 'D.M.YYYY'); // usually dates are provided in this format
      if (!date.isValid()) {
        date = moment(e.date);
      }

      return {
        sortIndex: date.unix(),
        name: date.format('DD.MM.'),
        series: Object.keys(e.predictions).map(key => ({name: key, value: e.predictions[key]})),
      };
    }).sort((a, b) => a.sortIndex- b.sortIndex);
  }
}

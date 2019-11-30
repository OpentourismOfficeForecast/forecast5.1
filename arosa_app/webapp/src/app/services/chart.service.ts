import { ChartData } from '../models/chart-data';
import { ForecastEntry } from '../models/forecast-entry.model';
import * as moment from 'moment';

export class ChartService {

  public static mapToChartData(entries: ForecastEntry[]): ChartData[] {
    return entries.map(e => {
      return {
        name: moment(e.date).format('DD.MM.'),
        series: Object.keys(e.predictions).map(key => ({name: key, value: e.predictions[key]})),
      };
    });
  }
}

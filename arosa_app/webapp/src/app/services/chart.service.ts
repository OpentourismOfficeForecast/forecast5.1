import { ChartData } from '../models/chart-data';
import { ForecastEntry } from '../models/forecast-entry.model';
import * as moment from 'moment';

export class ChartService {

  public static mapToChartData(entries: ForecastEntry[]): ChartData[] {
    return entries.map(e => {
      return {
        name: moment(e.date).format('DD.MM.'),
        series: [
          {
            name: "Tel",
            value: e.predictions.tel,
          },
          {
            name: "Mail",
            value: e.predictions.mail,
          },
          {
            name: "Schalter",
            value: e.predictions.counter,
          }
        ],
      };
    });
  }
}

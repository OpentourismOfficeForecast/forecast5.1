export interface ForecastEntry {
  date: string;
  predictions: {
    counter: number;
    mail: number;
    tel: number;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import { Observable } from 'rxjs';
import { ForecastEntry } from '../models/forecast-entry.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private readonly http: HttpClient) {
  }

  public getPredictions(timestamp: Moment): Observable<ForecastEntry[]> {
    // moment months are 0 indexed, backend expects one indexed
    return this.http.get<ForecastEntry[]>(`http://localhost:5000/forecast/${timestamp.year()}/${timestamp.month() + 1}`);
  }
}

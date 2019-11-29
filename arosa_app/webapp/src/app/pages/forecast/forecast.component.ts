import { Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';
import { ChartData } from '../../models/chart-data';
import { ChartService } from '../../services/chart.service';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  viewProviders: [
    {provide: MAT_DATE_FORMATS, useValue: {
        display: {
          dateInput: 'MMMM YYYY'
        }
      } as MatDateFormats
    }
  ]
})
export class ForecastComponent implements OnInit {

  public err: any;
  public date: Moment = moment();
  public data: ChartData[];
  public colors: string[] = [
    '#ffab00',
    '#ffca28',
    '#ff8f00',
    '#ff6f00',
    '#e65100',
    '#ff5722',
    '#ff3d00',
    '#bf360c',
  ];

  constructor(private readonly forecastService: ForecastService) {
  }

  public ngOnInit(): void {
    this.updateData();
  }

  public updateData(): void {
    this.data = undefined;
    this.err = undefined;
    this.forecastService.getPredictions(this.date)
      .subscribe(data => this.data = ChartService.mapToChartData(data), err => this.err = err.message);
  }

  public dateSelected(date: Moment): void {
    this.date = date;
    this.updateData();
  }
}

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { ChartData } from '../../models/chart-data';
import { ChartService } from '../../services/chart.service';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
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
}

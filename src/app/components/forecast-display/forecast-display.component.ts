import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { DataTracker } from '../../data-tracker/data-tracker';

@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.scss']
})
export class ForecastDisplayComponent implements OnInit {
  city$: Observable<string> = this.dataStore.city$;
  cityForecastWasObtained = false;
  forecastTracker = new DataTracker();
  displayedColumns: string[] = ['min', 'max', 'mean', 'mode'];
  dataSource = [];

  constructor(
    private dataStore: DataStoreService,
    private forecastService: WeatherForecastService) { }

  ngOnInit(): void {

    this.city$.subscribe((city) => {
      console.log({city});
    })

    this.forecastService.forecastTracker$.subscribe(forecastTracker => {
      this.forecastTracker = forecastTracker;
      console.log({forecastTracker})
      this.dataSource = [{
        min: this.forecastTracker.showMin(),
        max: this.forecastTracker.showMax(),
        mean: this.forecastTracker.showMean(),
        mode: this.forecastTracker.showMode(),
      }];

      if (this.forecastTracker.showMean()) {
        // TODO
        this.cityForecastWasObtained = true;
      }

    })
  }

}

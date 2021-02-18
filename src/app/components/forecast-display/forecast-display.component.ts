import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { DataStoreService } from '../../services/data-store.service';
import { WeatherForecastService } from '../../services/weather-forecast.service';
import { DataTracker } from '../../data-tracker/data-tracker';
import { CityTemperatureInfo } from '../../models/city-temperature-info';


@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.scss']
})
export class ForecastDisplayComponent implements OnInit {
  newCity: string ='';
  city$: Observable<string> = this.dataStore.city$;
  temperatureUnit$: Observable<string> = this.dataStore.temperatureUnit$;
  cityForecastWasObtained = false;
  forecastTracker = new DataTracker();
  displayedColumns: string[] = ['city', 'min', 'max', 'mean', 'mode', 'unit'];
  dataSource = new MatTableDataSource<CityTemperatureInfo>();
  cityTemperatureInfos: CityTemperatureInfo[] = [];
  forecastNotFound: boolean = false;
  currentTemperatureUnit: string;


  constructor(
    private dataStore: DataStoreService,
    private forecastService: WeatherForecastService) { }

  ngOnInit(): void {

    this.temperatureUnit$.subscribe((unit) => {
      this.currentTemperatureUnit = unit;
    })

    this.city$.subscribe((city) => {
      if (city) {
        this.newCity = city;
      }
      if (!this.forecastService.wasCityFound()) {
        this.forecastNotFound = true;
      }
    })

    this.forecastService.forecastTracker$.subscribe(forecastTracker => {

      this.forecastTracker = forecastTracker;
      this.forecastNotFound = false;


      if (this.forecastService.isValidForecastTracker()) {
        this.cityTemperatureInfos.push({
          city: this.newCity,
          min: this.forecastTracker.showMin(),
          max: this.forecastTracker.showMax(),
          mean: this.forecastTracker.showMean(),
          mode: this.forecastTracker.showMode(),
          unit: this.currentTemperatureUnit === 'imperial' ? 'F' : 'C',
        });

        this.dataSource.data = this.cityTemperatureInfos;
        this.cityForecastWasObtained = true;
      }

    })
  }


}

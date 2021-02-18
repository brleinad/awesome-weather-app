import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { Forecast } from '../models/forecast';
import { environment } from '../../environments/environment';
import { DataStoreService } from './data-store.service';
import { DataTracker } from '../data-tracker/data-tracker';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  city$: Observable<string> = this.dataStore.city$;
  cityNotFound = false;

  forecastTracker = new DataTracker();
  private readonly _forecastTracker = new BehaviorSubject<DataTracker>(this.forecastTracker);
  readonly forecastTracker$ = this._forecastTracker.asObservable();

  constructor(
    private http: HttpClient,
    private dataStore: DataStoreService,
    ) {

      this.city$.subscribe((city: string) => {
        if (city) {
          this.cityNotFound = false;
          this.getForecastForCity(city).subscribe(forecast => {
            console.log({forecast})
            this.handleForecastData(forecast);

          }, error => {
            console.log('there was an error')
            console.log(error)
            if (error.status === 404) {;
              this.cityNotFound = true;
            }
          })
        }
      })

  }

  getForecastForCity(cityName: string): Observable<Forecast> {
    const unit = 'imperial';
    return this.http.get<Forecast>(`${environment.OPENWEATHERMAP_API}/forecast?q=${cityName}&units=${unit}&appid=${environment.OPENWEATHERMAP_KEY}`);
  }


  private handleForecastData(forecast: Forecast) {
    console.log({forecast})
    forecast.list.forEach(forecastElement => this.forecastTracker.insert(forecastElement.main.temp));
    this._forecastTracker.next(this.forecastTracker);
  }


}

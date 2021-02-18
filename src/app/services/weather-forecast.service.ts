import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import { Forecast } from '../models/forecast';
import { environment } from '../../environments/environment';
import { DataStoreService } from './data-store.service';
import { DataTracker } from '../data-tracker/data-tracker';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  city$: Observable<string> = this.dataStore.city$;
  temperatureUnit$: Observable<string> = this.dataStore.temperatureUnit$;
  temperatureUnits: string = 'imperial';
  cityWasFound: boolean;

  forecastTracker = new DataTracker();
  private readonly _forecastTracker = new BehaviorSubject<DataTracker>(
    this.forecastTracker
  );
  readonly forecastTracker$ = this._forecastTracker.asObservable();

  constructor(private http: HttpClient, private dataStore: DataStoreService) {
    this.subscribeToCity();

    this.temperatureUnit$.subscribe(unit => {
      this.temperatureUnits = unit;
    });

  }

  private subscribeToCity(): void {

    this.city$.pipe(
      switchMap(city => {
        if (city) {
          return this.getForecastForCity(city);
        }
        // return an empty forecast if no city
        return of({list: []});
      })
    ).subscribe(
      (forecast) => {
        if (forecast) {
          this.cityWasFound = true;
          this.handleForecastData(forecast);
        }

      }, (error) => {
        if (error.status === 404) {
          this.cityWasFound = false;
        }
        this.dataStore.city = '';
        // need to subscribe again if the stream completes with an error
        this.subscribeToCity();
      }
    )
  }

  getForecastForCity(cityName: string): Observable<Forecast> {
    return this.http.get<Forecast>(
      `${environment.OPENWEATHERMAP_API}/forecast?q=${cityName}&units=${this.temperatureUnits}&appid=${environment.OPENWEATHERMAP_KEY}`
    );
  }

  private handleForecastData(forecast: Forecast) {
    if (forecast.list.length > 0) {
      this.forecastTracker = new DataTracker();
      forecast?.list.forEach((forecastElement) =>
        this.forecastTracker.insert(forecastElement.main.temp)
      );
      this._forecastTracker.next(this.forecastTracker);
    }
  }

  public isValidForecastTracker(): boolean{
    if (this.forecastTracker.showMean()) {
      return true;
    }
    return false
  }

  public wasCityFound(): boolean {
    return this.cityWasFound;
  }
}

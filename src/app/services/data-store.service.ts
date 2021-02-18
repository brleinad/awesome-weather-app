import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private readonly _city = new BehaviorSubject<string>('');
  readonly city$ = this._city.asObservable();

  private readonly _temperatureUnit = new BehaviorSubject<string>('');
  readonly temperatureUnit$ = this._temperatureUnit.asObservable();

  get city(): string {
    return this._city.getValue();
  }

  set city(cityName: string) {
    this._city.next(cityName);
  }

  get temperatureUnit(): string {
    return this._temperatureUnit.getValue();
  }

  set temperatureUnit(unit: string) {
    this._temperatureUnit.next(unit);
  }

}

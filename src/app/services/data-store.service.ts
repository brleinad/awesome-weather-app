import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private readonly _city = new BehaviorSubject<string>('');
  readonly city$ = this._city.asObservable();

  get city(): string {
    return this._city.getValue();
  }

  set city(cityName: string) {
    this._city.next(cityName);
  }

}

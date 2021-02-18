import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-unit-selector',
  templateUrl: './unit-selector.component.html',
  styleUrls: ['./unit-selector.component.scss']
})
export class UnitSelectorComponent implements OnInit {
  tempUnit: string = 'imperial';

  constructor(private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.dataStore.temperatureUnit = this.tempUnit;
  }

  onButtonClick() {
    this.dataStore.temperatureUnit = this.tempUnit;
  }

}

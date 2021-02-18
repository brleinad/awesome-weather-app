import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.scss']
})
export class ForecastDisplayComponent implements OnInit {
  city$ = this.dataStore.city$;

  constructor(private dataStore: DataStoreService) { }

  ngOnInit(): void {
  }

}

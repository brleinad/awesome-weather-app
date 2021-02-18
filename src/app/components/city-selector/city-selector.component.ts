import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss']
})
export class CitySelectorComponent implements OnInit {
  city = new FormControl('');

  constructor(private dataStore: DataStoreService) { }

  ngOnInit(): void {
  }

  onSubmitCity(): void {
    this.dataStore.city = this.city.value;
  }

}

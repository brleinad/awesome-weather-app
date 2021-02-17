import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { ForecastDisplayComponent } from './components/forecast-display/forecast-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectorComponent,
    ForecastDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

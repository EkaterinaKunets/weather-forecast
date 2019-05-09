import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,
         MatInputModule,
         MatButtonModule,
         MatListModule,
         MatDividerModule, } from '@angular/material';

import { CityInputComponent } from './city-input/city-input.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { ForecastHttpService } from './forecast-http.service';

@NgModule({
  declarations: [
    AppComponent,
    CityInputComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ForecastHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

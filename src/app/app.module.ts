import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

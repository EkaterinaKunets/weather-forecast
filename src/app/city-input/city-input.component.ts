import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})

export class CityInputComponent {
  response: any;
  cityName: string = "London";

  constructor(private http: HttpClient) {

  }

  search() {
    this.http.get('http://api.openweathermap.org/data/2.5/forecast?APPID=0877c830cbd9e3a8487d52878d2915ed&q=' + this.cityName)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }
}

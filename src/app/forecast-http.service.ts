import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ForecastHttpService {
  public response: any;
  constructor(private http: HttpClient) {

  }

  public search(city: string) {
    this.http.get('http://api.openweathermap.org/data/2.5/forecast?APPID=0877c830cbd9e3a8487d52878d2915ed&units=metric&q=' + city)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }
}

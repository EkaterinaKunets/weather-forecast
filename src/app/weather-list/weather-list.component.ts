import { Component } from '@angular/core';
import { ForecastHttpService } from '../forecast-http.service';
import { WeatherItem } from './items';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})

export class WeatherListComponent {

  constructor(private service: ForecastHttpService) {

  }

  public getWeatherItems(responseList) {
    let items: WeatherItem[] = [];
    for (let i = 0; i < 5; i++) {
      const item: WeatherItem = {
        day: responseList[i * 8].dt_txt.split(' ')[0],
        tMin: Math.round(responseList[i * 8].main.temp_min),
        tMax: Math.round(responseList[i * 8].main.temp_max),
        desc: responseList[i * 8].weather[0].main,
        wSpeed: responseList[i * 8].wind.speed
      };
      items.push(item);
    }
    return items;
  }
}

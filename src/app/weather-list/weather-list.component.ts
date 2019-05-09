import { Component } from '@angular/core';
import { ForecastHttpService } from '../forecast-http.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})

export class WeatherListComponent {
  constructor(private service: ForecastHttpService) {

  }
}

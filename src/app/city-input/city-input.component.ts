import { Component } from '@angular/core';
import { ForecastHttpService } from '../forecast-http.service';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})

export class CityInputComponent {

  constructor(private service: ForecastHttpService) {

  }
}

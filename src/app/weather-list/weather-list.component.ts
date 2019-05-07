import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})

export class WeatherListComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  getCity(newCity: string) {
    if (newCity) {
      this.heroes.push(newCity);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})

export class CityInputComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  getCity(newCity: string) {
    if (newCity) {
      this.heroes.push(newCity);
    }
  }
}

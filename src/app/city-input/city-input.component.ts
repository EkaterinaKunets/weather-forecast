import { Component } from '@angular/core';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})

export class CityInputComponent {
  city = '';
  getCity(newCity: string) {
    this.city = newCity;
  };
}

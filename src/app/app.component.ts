import { Component } from '@angular/core';
import { ForecastHttpService } from './forecast-http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ForecastHttpService: ForecastHttpService) {

  }
}

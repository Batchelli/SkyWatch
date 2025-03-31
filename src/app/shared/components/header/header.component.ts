// header.component.ts
import { Component } from '@angular/core';
import { ApiCallService } from '../../../services/api-call.service';
import { ResponsesService } from '../../../services/responses.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  searchQuerry: string = '';

  constructor(
    private apiCall: ApiCallService,
    private responses: ResponsesService,
  ) {}

  apiResponse = () => {
    this.apiCall.get(this.searchQuerry).subscribe((response) => {
      this.responses.weatherData = {
        city: response.name,
        main: response.weather[0].main,
        temp: response.main.temp,
        tempSens: response.main.feels_like,
        tempMax: response.main.temp_max,
        tempMin: response.main.temp_min,
        pressure: response.main.pressure,
        humidity: response.main.humidity,
        wind: response.wind.speed,
        lat: response.coord.lat,
        lon: response.coord.lon,
        sunrise: response.sys.sunrise,
        sunset: response.sys.sunset,
      };
    });
  };
}

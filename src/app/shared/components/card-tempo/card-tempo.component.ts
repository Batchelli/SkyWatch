import { Component } from '@angular/core';
import { ApiCallService } from '../../../services/api-call.service';
import { ResponsesService } from '../../../services/responses.service';

@Component({
  selector: 'app-card-tempo',
  standalone: true,
  imports: [],
  templateUrl: './card-tempo.component.html',
  styleUrl: './card-tempo.component.css',
})
export class CardTempoComponent {
  constructor(private responses: ResponsesService){}

  get response(){
    return this.responses.weatherData
  }

  convertToCelsius(kelvin: number): number {
    return this.responses.convertToCelsius(kelvin);
  }
}

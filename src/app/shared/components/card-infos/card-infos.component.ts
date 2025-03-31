import { Component } from '@angular/core';
import { ResponsesService } from '../../../services/responses.service';

@Component({
  selector: 'app-card-infos',
  standalone: true,
  imports: [],
  templateUrl: './card-infos.component.html',
  styleUrl: './card-infos.component.css'
})
export class CardInfosComponent {

  constructor(private responses: ResponsesService) { }

  get response() {
    return this.responses.weatherData
  }

  getFormattedTimeFromUnix(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  }

}

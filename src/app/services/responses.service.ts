import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResponsesService {
  weatherData: any;

  constructor() {}

  convertToCelsius(kelvin: number): number {
    return Math.round(kelvin - 273.15);
  }
}

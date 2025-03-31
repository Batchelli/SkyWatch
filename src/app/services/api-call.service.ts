// api-call.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private apiKey = 'db6e40d879238633f09a50b192f96104';

  constructor(private httpClient: HttpClient) {}

  // Busca por cidade
  get(city: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    );
  }

  // Busca por coordenadas (latitude e longitude)
  getByCoordinates(lat: number, lon: number): Observable<any> {
    return this.httpClient.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
    );
  }
}

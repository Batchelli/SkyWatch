import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private httpClient: HttpClient) {}

  apiKey = 'db6e40d879238633f09a50b192f96104';

  get(city: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    );
  }
}

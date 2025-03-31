// header.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../../services/api-call.service';
import { ResponsesService } from '../../../services/responses.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchQuerry: string = '';

  constructor(
    private apiCall: ApiCallService,
    private responses: ResponsesService
  ) {}

  ngOnInit(): void {
    // Se não houver busca manual, utiliza a geolocalização para a busca inicial
    if (!this.searchQuerry.trim()) {
      this.getLocation();
    }
  }

  // Obtém a localização atual e chama o serviço para buscar o clima por coordenadas
  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.apiCall.getByCoordinates(lat, lon).subscribe((response) => {
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
        },
        (error) => {
          console.error('Erro ao obter a localização:', error);
        }
      );
    } else {
      console.error('Geolocalização não suportada pelo navegador.');
    }
  }

  // Método chamado pelo botão de pesquisa
  apiResponse = (): void => {
    // Se houver valor digitado, realiza busca por cidade
    if (this.searchQuerry.trim()) {
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
    } else {
      // Se não houver cidade digitada, refaz a busca utilizando a localização
      this.getLocation();
    }
  };
}

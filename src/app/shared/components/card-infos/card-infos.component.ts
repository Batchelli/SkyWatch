import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-infos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-infos.component.html',
  styleUrls: ['./card-infos.component.css']
})
export class CardInfosComponent {
  // Inicializamos response com valores default para evitar erros de undefined
  response: any = {
    wind: 10,      
    humidity: 70, 
    pressure: 1012,  
    sunrise: 1680326400, 
    sunset: 1680373200  
  };

  // Método para converter o timestamp Unix em um horário legível
  getFormattedTimeFromUnix(unixTime: number): string {
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString();
  }
}

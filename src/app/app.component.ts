import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardTempoComponent } from './shared/components/card-tempo/card-tempo.component';
import { FormsModule } from '@angular/forms';
import { CardInfosComponent } from './shared/components/card-infos/card-infos.component';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import localeES from '@angular/common/locales/es';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';

registerLocaleData(localePT);
registerLocaleData(localeES);
registerLocaleData(localeDE);
registerLocaleData(localeFR);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CardTempoComponent, CardInfosComponent, FormsModule, CommonModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SkyWatch';
  dates = new Date();

  ngOnInit() {
    this.updateCurrentDate();
    setInterval(() => {
      this.updateCurrentDate();
    }, 1000);
  }

  updateCurrentDate() {
    this.dates = new Date();
  }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuerry: string = '';

  apiResponse(): void {
    console.log('Pesquisar cidade:', this.searchQuerry);
    // Implemente a chamada à API aqui.
  }
}

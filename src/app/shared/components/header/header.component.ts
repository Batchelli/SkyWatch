import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Propriedade para armazenar o valor digitado no input de pesquisa
  searchQuerry: string = '';

  constructor() { }

  // Método que será acionado quando o usuário clicar no botão de pesquisa.
  // Aqui você pode implementar a lógica para chamar a API com base no valor de searchQuerry.
  apiResponse(): void {
    console.log('Pesquisar cidade:', this.searchQuerry);
    // Implemente aqui a chamada para a API utilizando o valor de searchQuerry.
  }
}

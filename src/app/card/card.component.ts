import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
tipo = 'Pobre Premium';
preco = 100;

getfullprice(){
  setTimeout(() => {
    console.log('Set timeout');
    this.tipo = ' Plano Simples';
  }, 6000);

  return 'R$'+ this.preco + ',00/Mês'
}
}

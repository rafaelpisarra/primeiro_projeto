import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NovoCardComponent } from '../novo-card/novo-card.component';
import { ButtonCardComponent } from '../button-card/button-card.component';
import { ButtonNovoCardComponent } from '../button-novo-card/button-novo-card.component';
import { ButonCardCancelComponent } from '../buton-card-cancel/buton-card-cancel.component';



@NgModule({
  declarations: [
    CardComponent,
    NovoCardComponent,
    ButtonCardComponent,
    ButtonNovoCardComponent,
    ButonCardCancelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    NovoCardComponent,
    ButtonCardComponent,
    ButtonNovoCardComponent,
    ButonCardCancelComponent,
  ],
})
export class CardsModule { }

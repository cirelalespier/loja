import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListaComponent, 
    CardComponent
  ],
  exports:[
    ListaComponent
  ]
})
export class ConteudoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { CardComponent } from './card/card.component';
import { FilmeService } from './filme.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ListaComponent, 
    CardComponent
  ],
  exports:[
    ListaComponent
  ],
  providers: [FilmeService]
})
export class ConteudoModule { }

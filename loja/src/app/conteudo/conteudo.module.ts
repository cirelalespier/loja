import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { CardComponent } from './card/card.component';
import { FilmeService } from './filme.service';
import { HttpClientModule } from '@angular/common/http';
import { FormPesquisaComponent } from './lista/form-pesquisa/form-pesquisa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ListaComponent, 
    CardComponent, FormPesquisaComponent
  ],
  exports:[
    ListaComponent
  ],
  providers: [FilmeService]
})
export class ConteudoModule { }

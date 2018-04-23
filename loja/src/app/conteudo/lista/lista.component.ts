import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaFilmes: Filme[] = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    
}

  apagaFilme(filme: Filme): void {
    this.listaFilmes = this.listaFilmes.filter(item => item.id != filme.id)  
  }

  carregaLista(lista: Filme[]){
    this.listaFilmes = lista;
    }

}

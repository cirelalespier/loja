import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaFilmes: Filme[] = [{
    "titulo": "Batman Begins",
    "ano": "2005",
    "id": "tt0372784",
    "tipo": "movie",
    "poster": "https://ia.media-imdb.com/images/M/MV5BYzc4ODgyZmYtMGFkZC00NGQyLWJiMDItMmFmNjJiZjcxYzVmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
},
{
    "titulo": "Batman v Superman: Dawn of Justice",
    "ano": "2016",
    "id": "tt2975590",
    "tipo": "movie",
    "poster": "https://ia.media-imdb.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
},
{
    "titulo": "Batman",
    "ano": "1989",
    "id": "tt0096895",
    "tipo": "movie",
    "poster": "https://ia.media-imdb.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
}];

  constructor() { }

  ngOnInit() {
  }

  apagaFilme(filme: Filme): void {
    this.listaFilmes = this.listaFilmes.filter(item => item.id != filme.id)  
  }

}

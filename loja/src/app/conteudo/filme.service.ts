import { Injectable } from '@angular/core';
import { Filme } from './filme';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilmeService {

  url: string = 'http://www.omdbapi.com/?s=Batman&apikey=86740000'

  constructor(
    private http: HttpClient
  ) { }

  getFilmes() {
    return this.http.get(this.url);
  }

}

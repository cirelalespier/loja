import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filme } from '../filme';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input() filme: Filme;

  @Output() apaga = new EventEmitter<object>();

  constructor() { }  

  public apagaCard(): void {
    
    this.apaga.emit(this.filme);
  }

}

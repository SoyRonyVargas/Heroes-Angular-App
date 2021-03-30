import { Component, Input, OnInit , Output , EventEmitter } from '@angular/core';
import { Heroe } from '../../heroe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() heroe: Heroe
  @Input() busqueda: String

  constructor() { 
  }

  ngOnInit(): void {
  }


}

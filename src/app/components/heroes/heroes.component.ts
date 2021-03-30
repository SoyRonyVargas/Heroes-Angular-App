import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  heroes: Heroe[] = []

  constructor(
    private heroesService: HeroesService
  ) {
    console.log('test constructor');
    
  }
  
  ngOnInit(): void {
    
    this.heroes = this.heroesService.getHeroes()
    console.log(this.heroes);
    console.log('test ngOnInit');

  }

}

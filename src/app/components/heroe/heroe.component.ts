import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Heroe } from '../../heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe: Heroe
  
  constructor(
      private r: ActivatedRoute,
      private heroeService: HeroesService,
  ) { }

  ngOnInit(): void {
    this.r.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroe( params.id )
    })
    console.log(this.heroe);
    
  }

}

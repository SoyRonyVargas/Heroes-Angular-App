import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../heroe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroesBusqueda: Heroe[] = []
  busqueda:String
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ name }) => {
      this.heroesBusqueda = this.heroesService.searchHeroes( name )
      this.busqueda = name
    })
    console.log(this.heroesBusqueda);
    
  }

}

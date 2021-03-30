import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Heroe } from '../../../heroe';
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( 
    private hr: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  buscarHeroe( termino : String ): void
  {
    
    console.log(
      this.hr.searchHeroes( termino)
    );

    this.router.navigate(['/heroes' , 'search', termino])

  }

}

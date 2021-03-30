import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { RoutingModuleGlobal } from './app.routes';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    TestcomponentComponent,
    HeroeComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModuleGlobal,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

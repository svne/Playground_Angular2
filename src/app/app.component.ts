import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service'
 import { OnInit } from '@angular/core'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero : Hero;
  heroes : Hero[];

  ngOnInit(): void{
    this.getHeroes();
  }

  constructor(private heroService: HeroService) { 
    
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  }
}






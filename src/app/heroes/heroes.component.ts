import { Component } from '@angular/core';
import { UpperCasePipe, NgFor } from '@angular/common';
import { IHero } from '../interfaces/hero.dto';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}

  heroes: Array<IHero> = [];
  selectedHero?: IHero;

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes;
      },
      error: (error) => {
        alert(error);
      },
      complete: () => console.log('getHeroes completed'),
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

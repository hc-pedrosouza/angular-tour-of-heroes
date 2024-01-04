import { Component } from '@angular/core';
import { UpperCasePipe, NgFor } from '@angular/common';
import { IHero } from '../interfaces/hero.dto';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero/hero.service';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  selectedHero?: IHero;
  heroes: Array<IHero> = [];

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
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

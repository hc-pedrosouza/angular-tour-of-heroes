import { Component } from '@angular/core';
import { UpperCasePipe, NgFor } from '@angular/common'
import { IHero } from '../interfaces/hero.dto'
import {HEROES} from '../mock/hero.mock'
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroes: Array<IHero> = HEROES
  selectedHero?: IHero
  
  onSelect(hero: IHero): void {
    this.selectedHero = hero
    console.log(this.selectedHero)
  }
}

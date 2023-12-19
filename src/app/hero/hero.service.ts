import { Injectable } from '@angular/core';
import { IHero } from '../interfaces/hero.dto'
import { HEROES } from '../mock/hero.mock';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<IHero[]> {
    return of(HEROES)
  }
}

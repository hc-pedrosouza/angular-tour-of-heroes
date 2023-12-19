import { Injectable } from '@angular/core';
import { IHero } from '../interfaces/hero.dto'
import { HEROES } from '../mock/hero.mock';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: atualizado')
    return heroes
  }
}

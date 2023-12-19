import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { IHero } from '../interfaces/hero.dto';
//import {IHero} from '../heroes/heroes.component'

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent {
  @Input() hero?: IHero;
}

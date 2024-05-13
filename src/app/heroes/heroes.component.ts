import { RouterModule } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../models/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../services/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  imports:[RouterModule,CommonModule,FormsModule,HeroDetailComponent],
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroService = inject(HeroService);
  heroes: Hero[] = [];
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}

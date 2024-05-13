import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,HeroSearchComponent,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  private heroService = inject(HeroService);

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

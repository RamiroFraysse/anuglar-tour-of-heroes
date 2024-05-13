import {Component, inject} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../models/hero';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, UpperCasePipe,RouterModule],
})
export class HeroDetailComponent {
  hero: Hero | undefined;

  private route = inject(ActivatedRoute);
  private heroService = inject(HeroService);
  private location = inject(Location);

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}

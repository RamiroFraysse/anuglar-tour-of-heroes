import { DashboardComponent } from './dashboard/dashboard.component';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MessagesComponent,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title:string = 'Tour of Heroes';
}

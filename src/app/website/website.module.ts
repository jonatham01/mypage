import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { PlayersComponent } from './pages/players/players.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavComponent,
    LayoutComponent,
    HomeComponent,
    GoalsComponent,
    MatchesComponent,
    PlayersComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule
  ]
})
export class WebsiteModule { }

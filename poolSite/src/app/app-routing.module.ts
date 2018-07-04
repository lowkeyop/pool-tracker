import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './admin/players/players.component';
import { EditPlayerComponent } from './admin/players/edit-player/edit-player.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { NewPlayerComponent } from './admin/players/new-player/new-player.component';
import { PlayerDetailsComponent } from './admin/players/player-details/player-details.component';
import { ScoreSheetComponent } from './score-sheet/score-sheet.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'players/details/:playerNumber', component: PlayerDetailsComponent},
  { path: 'players/edit/:playerNumber', component: EditPlayerComponent},
  { path: 'players/new', component: NewPlayerComponent},


  { path: 'match', component: ScoreSheetComponent}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

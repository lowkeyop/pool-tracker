import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './admin/players/players.component';
import { PlayerDetailsComponent } from './admin/players/player-details/player-details.component';
import { ScoreSheetComponent } from './score-sheet/score-sheet.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayersComponent},
  { path: 'players/details/:firstName', component: PlayerDetailsComponent},
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

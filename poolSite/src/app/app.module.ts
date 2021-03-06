import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { RulesComponent } from './rules/rules.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './common/game/game.component';
import { Game } from './common/game.model';
import { ScoreSheetComponent } from './score-sheet/score-sheet.component';
import { MatchComponent } from './score-sheet/match/match.component';
import { MatchResultsComponent } from './score-sheet/match-results/match-results.component';
import { PlayerWaitlistComponent } from './player-waitlist/player-waitlist.component';
import { PoolTableComponent } from './player-waitlist/pool-table/pool-table.component';
import { PlayersComponent } from './admin/players/players.component';
import { HomeComponent } from './home/home.component';
import { PlayerDetailsComponent } from './admin/players/player-details/player-details.component';

import { PlayerService } from './services/player.service';
import { LeaguesService } from './services/leagues.service';
import { TeamsService } from './services/teams.service';
import { MatchService } from './services/match.service';
import { DataStorageService } from './services/data-storage.service';

import { NewPlayerComponent } from './admin/players/new-player/new-player.component';
import { EditPlayerComponent } from './admin/players/edit-player/edit-player.component';
import { TeamComponent } from './score-sheet/team/team.component';
import { NewTeamComponent } from './admin/teams/new-team/new-team.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TeamsComponent,
    RulesComponent,
    HeaderComponent,
    GameComponent,
    ScoreSheetComponent,
    MatchComponent,
    MatchResultsComponent,
    PlayerWaitlistComponent,
    PoolTableComponent,
    PlayersComponent,
    HomeComponent,
    PlayerDetailsComponent,
    NewPlayerComponent,
    EditPlayerComponent,
    TeamComponent,
    NewTeamComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlayerService,LeaguesService,TeamsService, MatchService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

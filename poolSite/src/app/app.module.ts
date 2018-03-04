import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { RulesComponent } from './rules/rules.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './common/game/game.component';
import { Game } from './common/game.model';
import { ScoreSheetComponent } from './score-sheet/score-sheet.component';
import { MatchComponent } from './common/match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TeamsComponent,
    RulesComponent,
    HeaderComponent,
    GameComponent,
    ScoreSheetComponent,
    MatchComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

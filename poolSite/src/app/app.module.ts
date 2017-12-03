import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { UsersComponent } from './admin/users/users.component';
import { DivisionsComponent } from './admin/divisions/divisions.component';
import { RulesComponent } from './rules/rules.component';
import { HeaderComponent } from './header/header.component';
import { InningsComponent } from './common/game/innings/innings.component';
import { GameComponent } from './common/game/game.component';
import { TimeoutComponent } from './common/game/timeout/timeout.component';
import { Game } from './common/game.model';
import { ScoreSheetComponent } from './score-sheet/score-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TeamsComponent,
    UsersComponent,
    DivisionsComponent,
    RulesComponent,
    HeaderComponent,
    InningsComponent,
    GameComponent,
    TimeoutComponent,
    ScoreSheetComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

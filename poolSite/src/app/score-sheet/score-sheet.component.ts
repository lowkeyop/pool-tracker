import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Game } from '../common/game.model';
import { Player } from '../common/player.model';
import { Match } from '../common/match.model';
import {TeamsService} from '../services/teams.service'

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.css'],
  providers: [TeamsService]
})
export class ScoreSheetComponent implements OnInit {
//need to emit player data to create the game component with correct data.
  constructor() { this.gameCount = 1; this.matchNo = 0}
  gameCount: number;

  homeTeamPlayer:Player;
  awayTeamPlayer:Player;

  matches: Match[] = [];

  matchNo: number;
  isHomeTeamPlayerReady: boolean = false;
  isAwayTeamPlayerReady: boolean = false;
  areBothTeamsReady: boolean = false;

  homeTotalGamesWon : number;
  awayTotalGamesWon : number;

  isMatchStarted: boolean = false;

  placeHolderPlayer = new Player(" ", "", "0000", 3, 3);

  setMatchPlayer(playerInfo: { teamName: string, matchPlayer: Player}, isTeam1: boolean){
    if( isTeam1){
      console.log("Setting the home team's player");
      this.homeTeamPlayer = playerInfo.matchPlayer;
      this.isHomeTeamPlayerReady = true;
    }
    else {
      console.log("Setting the away team's player");
      this.awayTeamPlayer = playerInfo.matchPlayer;
      this.isAwayTeamPlayerReady = true;
    }

  }
  setOpponentsForMatch(){
    this.areBothTeamsReady = this.isHomeTeamPlayerReady && this.isAwayTeamPlayerReady;
    if(!this.isHomeTeamPlayerReady){
      console.log("The home team needs to read a player");
    } if(!this.isAwayTeamPlayerReady){
      console.log("The away team needs to read a player");
    } if(this.areBothTeamsReady){
        if(this.matchNo < 5){
          console.log("Lock players in and add them to their team's already played list");
          this.matchNo++;
          this.isHomeTeamPlayerReady = false;
          this.isAwayTeamPlayerReady = false;
          this.isMatchStarted = true;
        }
        else
          console.log("All Matches done for the night");
        }
  }

  addMatch(newMatch : Match){
    console.log(newMatch);
    if(this.matches.length < 5){
      this.matches.push(newMatch);
    }
  }
  prepareNextMatch(){
    this.isMatchStarted = false;
    this.areBothTeamsReady = false;
    this.homeTeamPlayer =this.placeHolderPlayer
    this.awayTeamPlayer = this.placeHolderPlayer
  }
  ngOnInit() {
    this.homeTeamPlayer = this.placeHolderPlayer
    this.awayTeamPlayer = this.placeHolderPlayer
  }

}

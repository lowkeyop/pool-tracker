import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Game } from '../common/game.model';
import { Player } from '../common/player.model';
import { Match } from '../common/match.model';

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.css']
})
export class ScoreSheetComponent implements OnInit {
//need to emit player data to create the game component with correct data.
  constructor() { this.gameCount = 1; this.matchNo = 1}
  gameCount;

  homeTeamPlayer:Player = new Player("", "", "0000", 3, 3);
  awayTeamPlayer:Player = new Player("", "", "0000", 3, 3);
  currentMatch = {hTPlayer:this.homeTeamPlayer, aTPlayer: this.awayTeamPlayer};
  matches: Match[];
  @Output() newGameCreated = new EventEmitter<{gameNo: number, homeTeamPlayer : Player, awayTeamPlayer : Player}>();
  games: Game[] = [];
  game : Game;
  matchNo: number;
  isHomeTeamPlayerReady: boolean = false;
  isAwayTeamPlayerReady: boolean = false;
  areBothTeamsReady: boolean = false;

  isMatchStarted: boolean = false;



  onAddGame(){
    this.game  = new Game(this.gameCount,this.currentMatch.hTPlayer, this.currentMatch.aTPlayer,new Player("","",""));
    this.games.push(this.game);
    this.gameCount = this.games.length+1;
  }
  onRemoveGame(){
    if(this.gameCount > 0){
      this.games.pop();
      this.gameCount--;
    }
    else{
      console.log("There aren't any games to remove");
    }
  }
  setGameData( game: Game){
    console.log("set game data. Game results are below:");
    console.log(game);
    this.games[game.gameNo-1]= game;
  }
  showGameList(){
    console.log(this.games);
  }
  setMatchPlayer(playerInfo: { teamName: string, matchPlayer: Player}, isTeam1: boolean){
    if( isTeam1){
      console.log("Setting the home team's player");
      this.currentMatch.hTPlayer = playerInfo.matchPlayer;
      this.isHomeTeamPlayerReady = true;
    }
    else {
      console.log("Setting the away team's player");
      this.currentMatch.aTPlayer = playerInfo.matchPlayer;
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

  endCurrentMatch(){
    this.isMatchStarted = false;
    this.areBothTeamsReady = false;
  }
  ngOnInit() {
  }

}

import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Game } from '../common/game.model';
import { Player } from '../common/player.model';

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
  match = {hTPlayer:this.homeTeamPlayer, aTPlayer: this.awayTeamPlayer};
  @Output() newGameCreated = new EventEmitter<{gameNo: number, homeTeamPlayer : Player, awayTeamPlayer : Player}>();
  games: Game[] = [
  ];
  game : Game;
  matchNo: number;
  isHomeTeamPlayerReady: boolean;
  isAwayTeamPlayerReady: boolean;



  onAddGame(){

    this.game  = new Game(this.gameCount,this.match.hTPlayer, this.match.aTPlayer, false, false, "a");
    this.games.push(this.game);
    this.newGameCreated.emit({
      gameNo: this.gameCount,
      homeTeamPlayer: this.match.hTPlayer,
      awayTeamPlayer: this.match.aTPlayer
    });
    this.gameCount = this.games.length+1;
    console.log("emitting player objects and game number")
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
    console.log("setting match players from each team.  Placing them in match array to later be used by game components");
    console.log(playerInfo);
    console.log(isTeam1);
    if( isTeam1){
      console.log("it's team1");
      this.match.hTPlayer = playerInfo.matchPlayer;
    }
    else {
      this.match.aTPlayer = playerInfo.matchPlayer;
    }

    console.log("The match players:");
    console.log(this.match);
  }
  setOpponents(){

    if(this.matchNo < 5){
      console.log("Lock players in and add them to their team's already played list");
      this.matchNo++;
    }
    else
      console.log("All Matches done for the night");
  }
  ngOnInit() {
  }

}

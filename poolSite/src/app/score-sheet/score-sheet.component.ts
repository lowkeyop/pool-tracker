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

  p1:Player = new Player("Cordell", "Kennerly", "02342", 3, 3);
  p2:Player = new Player("Oppenent", "Last Name", "02342", 3, 3);
  match = {p1:this.p1, p2: this.p2};
  @Output() newGameCreated = new EventEmitter<{gameNo: number, player1 : Player, player2 : Player}>();
  games: Game[] = [
  ];
  game : Game;
  matchNo: number;


  onAddGame(){

    this.game  = new Game(this.gameCount,this.match.p1, this.match.p2, false, false, "a");
    this.games.push(this.game);
    console.log(this.p1);
    this.newGameCreated.emit({
      gameNo: this.gameCount,
      player1: this.match.p1,
      player2: this.match.p2
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
      this.match.p1 = playerInfo.matchPlayer;
    }
    else {
      this.match.p2 = playerInfo.matchPlayer;
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

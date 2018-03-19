import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Match } from '../../common/match.model';
import { Game } from '../../common/game.model';
import { Player } from '../../common/player.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  constructor() {  this.gameCount = 1; }

  defaultNumber = 0;//will be used for Match Constructor parameter value
  @Input() matchNumber : number;
  games: Game[] = [];

  @Input() homeTeamPlayer: Player;
  @Input() awayTeamPlayer: Player;
  @Output() finishedMatch = new EventEmitter< Match>();
  currentMatch : Match;
  gameCount: number;
  isMatchOver: boolean;
onAddGame(){
  this.currentMatch.summarizeMatchInfo();
  if(this.currentMatch.winner == null){
    var game = new Game(this.gameCount, this.homeTeamPlayer, this.awayTeamPlayer,null);
    this.games.push( game);
    this.gameCount++;
  }

}

onRemoveGame(){
   this.games.pop();
   this.gameCount>0?this.gameCount--:this.gameCount;
}
setGameData( game: Game){
  this.games[game.gameNo-1]= game;
  this.currentMatch.summarizeMatchInfo();
}

matchComplete(){
  console.log("Utilize the Match object's function to calculate all the match's information.  Afterwards, emit the Match object with the match number.");
  this.isMatchOver=!this.isMatchOver;
  this.finishedMatch.emit(this.currentMatch);
}
  ngOnInit() {
    this.isMatchOver = false;
  }
 ngOnChanges(){
   this.currentMatch =  new Match(this.matchNumber, this.homeTeamPlayer, this.awayTeamPlayer, this.games, null);
   this.currentMatch.summarizeMatchInfo();
}
}

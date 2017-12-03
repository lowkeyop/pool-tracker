import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Game } from '../common/game.model';
import { Player } from '../common/player.model';

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.css']
})
export class ScoreSheetComponent implements OnInit {
//need to emit player data to create the game component with correct data.
  constructor() { this.gameCount =0;}
  gameCount;

  p1:Player = new Player("Cordell", "Kennerly", "02342", 3, 3, 2,0,76);
  p2:Player = new Player("Oppenent", "Last Name", "02342", 3, 3, 2,0,76);

  @Output() newGameCreated = new EventEmitter<{gameNo: number, player1 : Player, player2 : Player}>();
  games: Game[] = [
  ];
  game : Game;

  onAddGame(){
    this.gameCount++;
    this.game  = new Game(this.gameCount,this.p1, this.p2, false, false, "a");
    this.games.push(this.game);
    console.log(this.p1);
    this.newGameCreated.emit({
      gameNo: this.gameCount,
      player1: this.p1,
      player2: this.p2
    });
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
  ngOnInit() {
  }

}

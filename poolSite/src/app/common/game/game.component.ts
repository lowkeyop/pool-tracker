import { EventEmitter, Component, OnInit,Input, Output,SimpleChanges } from '@angular/core';
import { Game } from '../../common/game.model';
import { Player } from '../../common/player.model'
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() {}


  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    // console.log(changes);
  }

  @Input('gameCurrent') cGame: Game;
  @Output() saveGame  = new EventEmitter<Game>();

  saveStats(){
    console.log("pushing game stats to game log")
    this.saveGame.emit(this.cGame);
  }
  breakAndRun(){
    this.cGame.bnr = !this.cGame.bnr;
  }

  eightOnBreak(){
    this.cGame.eob = !this.cGame.eob;
  }
  viewGameStats(){
    console.log(this.cGame);
  }

  setWinner(victor: Player){
    this.cGame.winner = victor.fName + " " + victor.lName;
  }
  ngOnInit() {
  }

}

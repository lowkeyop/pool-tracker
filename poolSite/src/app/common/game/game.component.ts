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
    console.log(changes);
  }

  @Input('gameCurrent') cGame: Game;
  @Output() statChange  = new EventEmitter<Game>();
  viewPlayer1Stats(){
    console.log(this.cGame.p1);
  }

  viewPlayer2Stats(){
    this.cGame.p1.fName = "Something else";
    console.log(this.cGame.p2);
  }

  viewGameStats(){
    console.log(this.cGame);
  }
  ngOnInit() {
  }

}

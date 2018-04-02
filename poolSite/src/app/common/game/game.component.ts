import { EventEmitter, Component, OnInit,Input, Output,SimpleChanges,ElementRef,ViewChild, ContentChild } from '@angular/core';
import { Game } from '../../common/game.model';
import { Player } from '../../common/player.model'
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { this.winVal = 0;}


  ngOnChanges(changes: SimpleChanges){
    this.saveStats();//updates game stats.
  }

  @Input('gameCurrent') cGame: Game;
  @Output() saveGame  = new EventEmitter<Game>();
  @ViewChild('innings') innings: ElementRef;
  @ViewChild('p1TO') p1TimeOuts: ElementRef;
  @ViewChild('p2TO') p2TimeOuts: ElementRef;
  @ViewChild('p1Def') p1Def: ElementRef;
  @ViewChild('p2Def') p2Def: ElementRef;
  winVal: number;//modulus 3 value that will help  toggle between the players and a null value
  toggleWinner(){
    this.winVal++;
    switch(this.winVal%3){
      case 1:
        console.log("home team winner");
        this.cGame.winner = this.cGame.p1;
        break;
      case 2:
      console.log("away team winner");
        this.cGame.winner = this.cGame.p2;
        break;
      case 0:
      console.log("no winner");
        this.cGame.winner = null;
        break;
    }


  }
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
    this.cGame.winner = victor;
  }
  setInnings(){
    this.cGame.innings=parseInt(this.innings.nativeElement.value);
  }

  setP1Timeouts(){
    this.cGame.p1TimeoutsTaken=parseInt(this.p1TimeOuts.nativeElement.value);
  }

  setP2Timeouts(){
    this.cGame.p2TimeoutsTaken=parseInt(this.p2TimeOuts.nativeElement.value);
  }
  setP1DefensiveShots(){
    this.cGame.p1DefensiveShots=parseInt(this.p1Def.nativeElement.value);
  }
  setP2DefensiveShots(){
    this.cGame.p2DefensiveShots=parseInt(this.p2Def.nativeElement.value);
  }

  ngOnInit() {
  }
}

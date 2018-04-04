import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../common/table.model';

@Component({
  selector: 'app-pool-table',
  templateUrl: './pool-table.component.html',
  styleUrls: ['./pool-table.component.css']
})
export class PoolTableComponent implements OnInit {

  constructor( ) {this.toggleVal=0; }

  @Input() tableInfo : Table;
  @Output() gameResult = new EventEmitter< number>();
  toggleVal: number;
  onGameFinished(){
    if( this.tableInfo.winner != undefined){
      console.log("Emitting game is over")
      this.gameResult.emit(Number(this.tableInfo.tableNumber));
    } else{
      console.log("Please decide a winer" );
    }
  }

  toggleWinner(){
    this.toggleVal++;
    switch(this.toggleVal%3){
      case 1:
        console.log(this.tableInfo.player1.name + " winner");
        this.tableInfo.winner = this.tableInfo.player1;
        break;
      case 2:
      console.log(this.tableInfo.player2.name + " winner");
        this.tableInfo.winner = this.tableInfo.player2;
        break;
      case 0:
      console.log("no winner");
        this.tableInfo.winner = undefined;
        break;
    }
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Table } from '../common/table.model';

@Component({
  selector: 'app-player-waitlist',
  templateUrl: './player-waitlist.component.html',
  styleUrls: ['./player-waitlist.component.css']
})
export class PlayerWaitlistComponent implements OnInit {

  constructor() { }

  playerList: {id: number, name: string}[] = [];
  uid: number;
  numberOfTables: number;
  tableList: Table[];//List of tableList
  isTableAmountLocked : boolean = false;

  onAddPlayerToList( nameInput: HTMLInputElement){
    this.playerList.push({id: this.uid, name: nameInput.value});
    this.uid++;
  }

  ngOnInit() {
    this.uid = 1;
    this.numberOfTables=4;
    this.modifyTableAmount(this.numberOfTables);
  }

  onLockNumberOfTables(){
    this.isTableAmountLocked = !this.isTableAmountLocked;
  }

  modifyTableAmount(num : number){
    var tempArray = new Array();
    for(var i = 1; i <= num; i++){
      tempArray.push(new Table(i));
    }
    this.tableList = tempArray;
  }

  onTableNumberModify( tableCount: HTMLInputElement){
    this.modifyTableAmount(Number(tableCount.value));
  }

  fillTables(){
    for(var i = 1; i < this.numberOfTables; i++){
      this.getNextPlayer(i);
      this.getNextPlayer(i);
    }
  }

  isCurrentlyPlayer(player: {id: number, name: string}){
    var isPlayerPlaying = false;
    for(var i = 0 ; i < this.tableList.length; i++){
      if(this.tableList[i].player1 == player)
        isPlayerPlaying=true;
      if(this.tableList[i].player2 == player)
        isPlayerPlaying=true;
    }
  }
  addPlayerBackInQueue(player: {id: number, name: string}){
    if(player.id > 0 && this.playerList.indexOf(player) == -1 ){
     this.playerList.push(player);
    }
  }
  getNextPlayer( tableNumber: number){ //
    if(this.playerList.length > 0){
      var nextPlayerUp = this.playerList[0];//grab the highest queue position.
      var readyTable = this.tableList[tableNumber-1];
      console.log(readyTable.winner);

      if(readyTable.player1.id < 0){
        readyTable.player1 = nextPlayerUp;
      }
      else if(readyTable.player2.id < 0){
        readyTable.player2 = nextPlayerUp;
      }

      if(readyTable.winner != undefined){
        if(readyTable.winner != readyTable.player1 ){
          console.log(readyTable.player1.name + " lost");
          this.addPlayerBackInQueue(readyTable.player1);
          readyTable.player1 = nextPlayerUp;
        } else if(readyTable.winner != readyTable.player2 ){{
          console.log(readyTable.player2.name + " lost ");
          this.addPlayerBackInQueue(readyTable.player2);
          readyTable.player2 = nextPlayerUp;
        }
      }
    }
    this.playerList.splice(0,1);
  }

}

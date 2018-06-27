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
    for(var i = 0; i < this.playerList.length; i++){
      for(var j = 0; j < this.tableList.length; j++){
        var table = this.tableList[j];
        if(this.isTableOpen(table)){
          this.sendNextPlayerToTable(table);
        }
      }
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
  isTableEmpty(table: Table){
    return this.isTableSlotEmpty(table, true) && this.isTableSlotEmpty(table, false);
  }
  isTableOpen(table: Table){
    return this.isTableSlotEmpty(table, true) || this.isTableSlotEmpty(table, false);
  }
  isTableSlotEmpty(table : Table, firstSlotCheck: boolean){
    var isSlotEmpty = true;
    if(firstSlotCheck){
      isSlotEmpty = (table.player1.id == undefined || table.player1.id < 0 );
    } else if (!firstSlotCheck){
      isSlotEmpty = (table.player2.id == undefined || table.player2.id < 0 );
    }
    return isSlotEmpty;
  }
  sendNextPlayerToTable( table: Table){ //
    if(this.playerList.length > 0){
      var nextPlayerUp = this.playerList[0];//grab the highest queue position.

      if(this.isTableEmpty(table)){
        table.player1 = nextPlayerUp;
      } else if(this.isTableSlotEmpty(table, true)){
        table.player1 = nextPlayerUp;
      } else if(this.isTableSlotEmpty(table, false)){
        table.player2 = nextPlayerUp;
      }


      if(table.winner != undefined){ //winner decalred
        if(table.winner != table.player1 ){
          console.log(table.player1.name + " lost");
          this.addPlayerBackInQueue(table.player1);
          table.player1 = nextPlayerUp;
        } else if(table.winner != table.player2 ){{
          console.log(table.player2.name + " lost ");
          this.addPlayerBackInQueue(table.player2);
          table.player2 = nextPlayerUp;
        }
      }
    }
    this.playerList.splice(0,1);
  }

}
}

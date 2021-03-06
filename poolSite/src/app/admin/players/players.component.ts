import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {PlayerService} from '../../services/player.service';
import {DataStorageService} from '../../services/data-storage.service';

import {Player} from '../../common/player.model'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],

})
export class PlayersComponent implements OnInit {

  players : Player[] = [];

  constructor(private router: Router,
              private route :ActivatedRoute,
              private playerService: PlayerService,
              private dds : DataStorageService
              ) { }

  ngOnInit() {
     this.dds.getAllUsers();
     this.playerService.playersChanged.subscribe((players: Player[])=>{
       this.players=players;
     })
    //  this.players = this.playerService.getAllPlayers();
  }

  onEditPlayer(player: Player){
    this.router.navigate(['edit', player.playerNumber], {relativeTo: this.route})
  }

  onDeletePlayer(player: Player){
    var confirmDeletion = confirm("Are you sure you want to delete " + player.firstName + "?");
    if(confirmDeletion){
      this.playerService.removePlayer(player);
      this.dds.removeSingleUser(player);
      alert(player.firstName + " was successfully deleted");
    }
  }

  onViewPlayerDetails(player : Player){
    this.router.navigate(['details' , player.playerNumber], {relativeTo: this.route});
  }
}

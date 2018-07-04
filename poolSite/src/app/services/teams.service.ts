import { Injectable } from '@angular/core';

import {Player} from '../common/player.model'

import {PlayerService} from './player.service';

@Injectable()
export class TeamsService {

  constructor(private playerService : PlayerService ){}

  homeTeam  = this.createTeam(5);
  awayTeam  =  this.createTeam(5);


  createTeam(teamSize: number){
    var team = [];
    var allPlayers = this.playerService.getAllPlayers();

    for( var i = 0; i < teamSize ; i++){
      var randNumber = Math.floor(Math.random() * allPlayers.length);
      var player = allPlayers[randNumber];
      var isUnique = team.findIndex(p => p == player) == -1;

      while(!isUnique){
        var randNumber = Math.floor(Math.random() * allPlayers.length);
        var player = allPlayers[randNumber];
        var isUnique = team.findIndex(p => p == player) == -1;
      }

      var index = team.findIndex(p => p == player);
      allPlayers.splice(index,0);
      team.push(player);


    }
    return team;
  }
  addPlayer(player : Player, isHomeTeam: boolean){
    if(isHomeTeam){
      this.homeTeam.push(player);
    } else
      this.awayTeam.push(player);

  }

  removePlayerByPlayerNumber(player: Player, isHomeTeam: boolean){
    var i;
    if(isHomeTeam){
        i = this.homeTeam.indexOf(player,0);
        if(i > -1){
          this.homeTeam.splice(i,0);
        }
    } else{
        i = this.awayTeam.indexOf(player,0);
        if(i > -1){
          this.awayTeam.splice(i,0);
        }
    }


  }
  updatePlayer(playerNumber: string, player: Player, isHomeTeam: boolean){
    var i;
    if(isHomeTeam){
        i = this.homeTeam.indexOf(player,0);
        if(i > -1){
          this.homeTeam[i] = player;
        }
    } else{
        i = this.awayTeam.indexOf(player,0);
        if(i > -1){
          this.awayTeam[i] = player;
        }
    }
  }
}

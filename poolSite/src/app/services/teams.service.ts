import { Injectable } from '@angular/core';

import {Player} from '../common/player.model';
import {Team} from '../common/team.model';

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

  createTeams(amountOfTeams: number){
    const MINIMUM_AMOUNT_OF_PLAYER_ON_TEAM = 6;
    var allTeams : Team[] = [];
    var totalPlayerAmount = +this.playerService.getPlayersCount();
    console.log(totalPlayerAmount);
    const NEEDED_AMOUNT_OF_PLAYERS = amountOfTeams*MINIMUM_AMOUNT_OF_PLAYER_ON_TEAM-totalPlayerAmount;
      console.log("Adding more players");
      if(NEEDED_AMOUNT_OF_PLAYERS > totalPlayerAmount){
        for(var i = 0; i <  (NEEDED_AMOUNT_OF_PLAYERS) ; i++){
          var fName = "Test";
          var lName = "Player"+i;
          var pNumber = ( i + 10000).toString();
          var player = new Player(fName, lName, pNumber, (Math.floor(Math.random() * 8 )+ 2));
          this.playerService.addPlayer(player);
        }
      }

    for(var i = 0; i < amountOfTeams; i++){
      var playerList : Player[];
      playerList = this.createTeam(MINIMUM_AMOUNT_OF_PLAYER_ON_TEAM);
      var teamName = playerList[0].fName + " " + playerList[0].lName + "'s Team";
      var tempTeam = new Team(playerList, teamName);
      allTeams.push(tempTeam);
    }
    return allTeams;
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

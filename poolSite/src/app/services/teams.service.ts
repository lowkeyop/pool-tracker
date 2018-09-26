import { Injectable } from '@angular/core';

import {Player} from '../common/player.model';
import {Team} from '../common/team.model';

import {PlayerService} from './player.service';

@Injectable()
export class TeamsService{

  constructor(private playerService : PlayerService ){
    this.teamPool = this.createTeams(12);
  }

  teamPool : Team[] = [];


  getAllTeams(){
    return this.teamPool;
  }
  addTeam(team: Team){
    this.teamPool.push(team);
  }
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


  createTeams(amountOfTeams: number){
    const MINIMUM_AMOUNT_OF_PLAYER_ON_TEAM = 6;
    var allTeams : Team[] = [];
    var totalPlayerAmount = +this.playerService.getPlayersCount();
    const NEEDED_AMOUNT_OF_PLAYERS = amountOfTeams*MINIMUM_AMOUNT_OF_PLAYER_ON_TEAM-totalPlayerAmount;
      if(NEEDED_AMOUNT_OF_PLAYERS > totalPlayerAmount){
        for(var i = 0; i <  (NEEDED_AMOUNT_OF_PLAYERS) ; i++){
          var name = this.playerService.generateRandomName();
          var pNumber = ( i + 10000).toString();
          var player = new Player(name.split(" ")[0], name.split(" ")[1], pNumber, (Math.floor(Math.random() * 8 )+ 2));
          this.playerService.addPlayer(player);
        }
      }

    for(var i = 0; i < amountOfTeams; i++){
      var playerList : Player[];
      playerList = this.createTeam(MINIMUM_AMOUNT_OF_PLAYER_ON_TEAM);
      var teamName = playerList[0].getFullName() + "'s Team";
      var tempTeam = new Team(playerList, teamName);
      this.addTeam(tempTeam);
      allTeams.push(tempTeam);
    }
    return allTeams;
  }

  removePlayerByPlayerNumber(player: Player, team: Team){
    var i = team.players.indexOf(player,0);
    if(i > -1){
      team.players.splice(i,0);
    }
  }
  updatePlayer(playerNumber: string, player: Player, team: Team){
    var players = team.players;

    for(var i = 0; i < players.length; i++){
      if(player.playerNumber == players[i].playerNumber){
        team.players[i] = player;
      }
    }
  }
}

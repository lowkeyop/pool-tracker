import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import {Player} from '../../../common/player.model';
import {Team} from '../../../common/team.model';

import {PlayerService} from '../../../services/player.service';
import {TeamsService} from '../../../services/teams.service'

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {

  constructor(private teamService : TeamsService,
              private playerService : PlayerService,
              private router: Router,
              private route :ActivatedRoute) { }
  newTeam : Team;
  availablePlayerList : Player[];
  @ViewChild('teamName') tName : ElementRef;
  ngOnInit() {
    this.availablePlayerList = this.playerService.getAllPlayers();
    this.newTeam = new Team([],"");
  }
  addToRoster(player: Player){
    console.log(player.getFullName() + " added to Roster");
    if(!this.isAlreadyOnRoster(player)){
        this.newTeam.players.push(player);
    }

  }
  isAlreadyOnRoster(player : Player){
    var locatePlayer = this.newTeam.players.indexOf(player);
    return locatePlayer !== -1;
  }
  removeFromTeam(player: Player){
    const playerIndex = this.newTeam.players.indexOf(player,0);
    console.log("removing player from roster " + playerIndex);
    this.newTeam.players.splice(playerIndex, 1);
    console.log("new size of array: " + this.newTeam.players.length);
  }

  registerTeam(teamName: string){
    this.newTeam.teamName = teamName;
    this.teamService.addTeam(this.newTeam);
    console.log("Team: " + this.newTeam.teamName + " added" );
    console.log("total amount of teams: " + this.teamService.teamPool.length);
    this.newTeam = new Team([],"");
    this.tName.nativeElement.value = "";
  }
}

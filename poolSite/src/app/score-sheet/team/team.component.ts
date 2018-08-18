import { Component,EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Player } from '../../common/player.model';
import { Team } from '../../common/team.model';
import {TeamsService} from '../../services/teams.service'
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private teamService : TeamsService) {
    this.playedPlayers =[];
    this.arePlayersInMatch= false;

    var teamAmount = this.teamService.getAllTeams.length;
    var randomTeamPick = Math.floor(Math.random()* this.teamService.getAllTeams().length);
    this.usedTeam = this.teamService.getAllTeams()[randomTeamPick];
    this.team = this.usedTeam.players;
    this.teamName  = this.usedTeam.teamName;
  }

  usedTeam : Team = null;
  @Input() isHomeTeam: boolean;
  team: Player[];
  playedPlayers : Player[] = [];
  @Input() arePlayersInMatch: boolean;
  @Input() matchNumber: number;
  hostLocation: string = "Cue Club Cafe";
  teamNumber: string = "84313";
  teamName : string;


  @Output() playerSelected = new EventEmitter<{teamName : string ,matchPlayer: Player}>();

  onChoosePlayer(player: Player){
    console.log(player.fName + "  "+ player.lName + " selected.");
    this.playerSelected.emit({teamName: this.teamName, matchPlayer: player});
    this.addPlayerToPlayedList(player, this.matchNumber)
  }
  addPlayerToPlayedList(player: Player, matchPlayed: number){
    console.log("adding player to played list");
    console.log(player);
    console.log("match number: " + matchPlayed);
    this.playedPlayers[matchPlayed] = player;
  }
  ngOnInit() {

  }


}

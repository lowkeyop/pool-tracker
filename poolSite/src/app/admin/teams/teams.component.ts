import { Component,EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Player } from '../../common/player.model';
import { Team } from '../../common/team.model';
import {TeamsService} '../../services/teams.service'
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [TeamsService]
})
export class TeamsComponent implements OnInit {

  constructor(private teamService : TeamsService = new TeamsService()) { this.playedPlayers =[];this.arePlayersInMatch= false;}

  team: Player[] = [
    new Player("Cordell", "Kennerly", "02342", 3, 3,),
    new Player("Jacob", "Atoms", "032416", 8, 3),
    new Player("Steve", "Arnoldstlyn", "063484", 4, 3)
  ];
  @Input() teamRoster: Team;
  playedPlayers : Player[] = [];
  @Input() arePlayersInMatch: boolean;
  @Input() matchNumber: number;
  hostLocation: string = "Cue Club Cafe";
  teamNumber: string = "84313";
  teamName : string = "Leave'em with Skittles"


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

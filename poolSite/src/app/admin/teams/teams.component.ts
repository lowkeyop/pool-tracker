import { Component,EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Player } from '../../common/player.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }
  team: Player[] = [
    new Player("Cordell", "Kennerly", "02342", 3, 3,),
    new Player("Jacob", "Atoms", "032416", 8, 3),
    new Player("Steve", "Arnoldstlyn", "063484", 4, 3)
  ];
  playedPlayers : Player[];

  @Input() matchNumber: number;
  hostLocation: string = "Cue Club Cafe";
  teamNumber: string = "84313";
  teamName : string = "Leave'em with Skittles"

  @Output() playerSelected = new EventEmitter<{teamName : string ,matchPlayer: Player}>();
  onChoosePlayer(player: Player){
    console.log(player.fName + "  "+ player.lName + " selected.");

    this.playerSelected.emit({teamName: this.teamName, matchPlayer: player});
    this.addPlayerToPlayedList(player, this.matchNumber);
  }
  addPlayerToPlayedList(player: Player, matchPlayed: number){
    console.log("adding player to played list");
    this.playedPlayers[matchPlayed-1] = player;
    console.log(player.fName + "has already been sent to match");
  }
  ngOnInit() {
  }

}

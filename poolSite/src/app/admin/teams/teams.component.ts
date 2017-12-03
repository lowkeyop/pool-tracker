import { Component,EventEmitter, Output, OnInit } from '@angular/core';
import { Player } from '../../common/player.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }
  team: Player[] = [
    new Player("Cordell", "Kennerly", "02342", 3, 3, 2, 0,76),
    new Player("Jacob", "Atoms", "032416", 8, 3, 2, 0,76),
    new Player("Steve", "Arnoldstlyn", "063484", 4, 3, 2, 0,76)
  ];
  hostLocation: string = "Cue Club Cafe";
  teamNumber: string = "84313";
  teamName : string = "Leave'em with Skittles"

  @Output() playerSelected = new EventEmitter<{matchPlayer: Player}>();
  onChoosePlayer(player: Player){
    console.log(player);
  }
  ngOnInit() {
  }

}

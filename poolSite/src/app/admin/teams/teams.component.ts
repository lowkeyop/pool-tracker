import { Component, OnInit } from '@angular/core';
import { Player } from '../../common/player.model';

import {TeamsService} from '../../services/teams.service'
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  constructor(private teamService : TeamsService) { }
  team1 : Player[];

  ngOnInit() {
this.team1 = this.teamService.homeTeam;

  }

}

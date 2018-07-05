import { Component, OnInit } from '@angular/core';
import { Team } from '../common/team.model';
import { Player } from '../../common/player.model';

import {TeamsService} from '../../services/teams.service'
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  constructor(private teamService : TeamsService) { }
  allTeams = [];

  ngOnInit() {
    this.allTeams = this.teamService.createTeams(5);
    console.log(this.allTeams);
    
  }

}

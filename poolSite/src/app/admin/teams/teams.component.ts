import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

import { Team } from '../../common/team.model';
import { Player } from '../../common/player.model';

import {TeamsService} from '../../services/teams.service'
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  constructor(private teamService : TeamsService,
              private router : Router,
              private route : ActivatedRoute) { }
  allTeams = [];

  ngOnInit() {
    this.teamService.createTeams(5);
    this.allTeams = this.teamService.getAllTeams();

  }

  onCreateNewTeam(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

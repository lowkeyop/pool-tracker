import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import {Player} from '../../../common/player.model';
import {League} from '../../../common/league.model';
import {SkillLevel} from '../../../common/skill-level.model';


import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  player : Player;

  constructor(private playerService : PlayerService,
              private router: Router) { }

  ngOnInit() {

    this.player = new Player("","","",3);

  }

  onAddNewPlayer(first: string, last: string, pNumber: string, skillLevel? : number){
    const DEAFULT_SKILL_LEVEL = 4;

    this.player.fName = first;
    this.player.lName = last;
    this.player.playerNumber = pNumber;
    this.player.playerSkillLevel = skillLevel == null? DEAFULT_SKILL_LEVEL : +skillLevel;

    this.playerService.addPlayer(this.player);
    console.log("Player registered");
    this.router.navigate(['/players']);

  }
}

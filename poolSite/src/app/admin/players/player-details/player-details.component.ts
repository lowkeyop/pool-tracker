import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import {Player} from '../../../common/player.model';
import {League} from '../../../common/league.model';


import {PlayerService} from '../../../services/player.service';
import {LeaguesService} from '../../../services/leagues.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player : Player;

  constructor(private route: ActivatedRoute,
              private playerService : PlayerService) { }

  ngOnInit() {
    var playerNumber = this.route.snapshot.params['playerNumber'];
    this.player = this.playerService.getPlayer(playerNumber);

  }

}

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
  leagues : League[];
  formats : string[];
  constructor(private route: ActivatedRoute,
              private playerService : PlayerService,
              private leaguesService : LeaguesService) { }

  ngOnInit() {
    var playerNumber = this.route.snapshot.params['playerNumber'];
    this.player = this.playerService.getPlayer(playerNumber);
    this.leagues = this.leaguesService.getAllLeagues();
    this.formats = this.leaguesService.getAllFormatTypes();
  }
  onAddNewLeague(name:string, avail8: boolean,avail9: boolean,avail10: boolean, desc: string){
    var formats = [];
    if(avail8){
      formats.push("8-ball");
    }
    if(avail9){
      formats.push("9-ball");
    }
    if(avail10){
      formats.push("10-ball");
    }
    var newLeague = new League(name, formats,desc );
    this.leaguesService.addLeague(newLeague);

  }
}

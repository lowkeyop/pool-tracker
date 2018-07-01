import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import {RegisterPlayer} from '../../../common/register-player.model';
import {Player} from '../../../common/player.model';
import {League} from '../../../common/league.model';
import {SkillLevel} from '../../../common/skill-level.model';


import {PlayerService} from '../../../services/player.service';
import {LeaguesService} from '../../../services/leagues.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  player : RegisterPlayer;
  leagues : League[];
  formats : string[];
  chosenLeague : League;
  constructor(private route: ActivatedRoute,
              private playerService : PlayerService,
              private leaguesService : LeaguesService) { }

  ngOnInit() {

    this.player = new RegisterPlayer("First Name", "Last Name", this.playerService.getPlayersCount(), );
    this.leagues = this.leaguesService.getAllLeagues();
    this.formats = this.leaguesService.getAllFormatTypes();
    this.chosenLeague = this.leaguesService.getLeague("MEH");
    console.log(this.chosenLeague);
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
  onSelectedLeague(selectedLeague: string){
    this.chosenLeague = this.leaguesService.getLeague(selectedLeague);
  }
  onAddNewPlayer(first: string, last: string, pNumber: string, league: League, formats: string[]){
    var sLs = [];
    for( let format of formats){
      console.log(format);
      sLs.push({format: format , SkillLevel: "4"})
    }

    var sL = [new SkillLevel(league.name, sLs)];

    var tempPlayer: Player =  new Player(first, last, pNumber, 4);

    this.player.fName = first;
    this.player.lName = last;
    this.player.playerNumber = pNumber;
    this.player.playerSkillLevel = sL;

    this.playerService.addPlayer(tempPlayer);
    this.playerService.registerPlayer(this.player);
    console.log("Player registered")
  }
}

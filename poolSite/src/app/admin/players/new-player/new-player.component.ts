import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';

import {Player} from '../../../common/player.model';
import {PlayerService} from '../../../services/player.service';

import {DataStorageService} from '../../../services/data-storage.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  player : Player;
  @ViewChild('newPlayerForm') newPlayerForm : NgForm;


  constructor(private playerService : PlayerService,
              private router: Router, private dataStorageService : DataStorageService) { }

  ngOnInit() {

    this.player = new Player("","","",3);

  }

  onCreateNewPlayer(){

    const DEAFULT_SKILL_LEVEL = 4;
    var userData = this.newPlayerForm.form.value.userData;
    this.player.firstName = userData.first_name ;
    this.player.lastName = userData.last_name;
    this.player.playerNumber = userData.player_number;
    this.player.playerSkillLevel = userData.skill_level == null? DEAFULT_SKILL_LEVEL : +userData.skill_level;
    this.player.matchesPlayed = 0;

    this.playerService.addPlayer(this.player);
    this.newPlayerForm.reset();
    alert(userData.first_name + " was added to the player list");
    this.dataStorageService.storeSingleUser(this.player);
    this.router.navigate(['/players']);

  }

  onSubmit(fData: NgForm){
    console.log(fData);
    this.onCreateNewPlayer();

  }
}

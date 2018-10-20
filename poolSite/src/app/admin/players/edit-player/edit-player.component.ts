import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import {Player} from '../../../common/player.model';

import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  player : Player;

  constructor(private route: ActivatedRoute,
              private playerService : PlayerService,
              private router: Router) { }

  ngOnInit() {
    var playerNumber = this.route.snapshot.params['playerNumber'];
    this.player = this.playerService.getPlayer(playerNumber);

  }

    onUpdatePlayer(first: string, last: string){
      const DEAFULT_SKILL_LEVEL = 4;

      this.player.firstName = first;
      this.player.lastName = last;

      this.playerService.addPlayer(this.player);
      console.log("Player updated");
      this.router.navigate(['/players']);
    }

}

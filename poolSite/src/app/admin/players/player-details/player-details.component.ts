import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Player} from '../../../common/player.model'

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player : Player = new Player();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.player.fName = this.route.snapshot.params['firstName'];
  }

}

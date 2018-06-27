import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PlayerService} from '../../services/player.service'
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayerService]
})
export class PlayersComponent implements OnInit {

  players : Players[] = [];

  constructor(private router: Router,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getAllPlayers();
  }

  onLoadMatch(){
    this.router.navigate(['/match'], {relativeTo: this.route})
  }

  onEditPlayer(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onViewPlayerDetails(){
    this.router.navigate(['details'], {relativeTo: this.route})
  }
}

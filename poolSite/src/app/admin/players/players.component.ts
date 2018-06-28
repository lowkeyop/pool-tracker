import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {Player} from '../../common/player.model'
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayerService]
})
export class PlayersComponent implements OnInit {

  players : Player[] = [];

  constructor(private router: Router,
              private route :ActivatedRoute,
              private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getAllPlayers();
  }

  onEditPlayer(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onViewPlayerDetails(player : Player){
    this.router.navigate(['details/' + player.fName], {relativeTo: this.route})
  }
}

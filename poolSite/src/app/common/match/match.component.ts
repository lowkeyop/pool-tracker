import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Match } from '../../common/match.model';
import { Game } from '../../common/game.model';
import { Player } from '../../common/player.model';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  constructor() { }

  defaultNumber = 0;//will be used for Match Constructor parameter value
  ngOnInit() {
  }

}

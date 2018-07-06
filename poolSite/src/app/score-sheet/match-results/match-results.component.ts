import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../common/match.model';
@Component({
  selector: 'app-match-results',
  templateUrl: './match-results.component.html',
  styleUrls: ['./match-results.component.css']
})
export class MatchResultsComponent implements OnInit {

  constructor() {
   }

  @Input() matchItems : Match[];
  ngOnInit() {

  }

}

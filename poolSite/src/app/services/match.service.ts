import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MatchService {

  constructor() { }
  updateGameStats = new Subject();
  showCurrentGame = new Subject();
}

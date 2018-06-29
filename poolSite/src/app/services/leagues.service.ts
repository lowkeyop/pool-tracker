import { Injectable } from '@angular/core';
import { League } from '../common/league.model';

@Injectable()
export class LeaguesService {
  private availableLeagues = [
    new League("ABC", ["8-ball","9-ball"], "A basic league that's fun to play and tailored to laying a sound foundation for novice skill levels" ),
    new League("MEH", ["8-ball","9-ball"], "A basic league that's fun to play and tailored to laying a sound foundation for intermediate skill levels" ),
    new League("PRO", ["8-ball","9-ball"], "A basic league that's fun to play and tailored to laying a sound foundation for advanced/professional skill levels" )
  ];
  private formatTypes = ["8-ball","9-ball", "10-ball"];


  getAllLeagues(){
    return this.availableLeagues;
  }
  getAllFormatTypes(){
    return this.formatTypes;
  }
  addLeague(league: League){
    this.availableLeagues.push(league);
  }

  getLeague(name: string){
    const foundLeague =  this.getAllLeagues().find(league => league.name == name);
    return foundLeague;
  }
}

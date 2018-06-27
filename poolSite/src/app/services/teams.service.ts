import {Player} from '../common/player.model'
export class TeamsService {
  homeTeam  = [
    new Player("Cordell", "Kennerly", "02342", 3, 3,),
    new Player("Mike", "Jones", "032416", 8, 3),
    new Player("Steve", "Ricks", "542275", 4, 3),
    new Player("Jake", "LeGuard", "759465", 4, 3),
    new Player("Dave", "Turtle", "781364", 4, 3)
  ]
  awayTeam  = [
    new Player("Barry", "Lox", "32513", 3, 3,),
    new Player("Nic", "Wilters", "77625", 8, 3),
    new Player("Jojo", "Zolla", "54227", 4, 3),
    new Player("Harry", "Maupza", "43142", 4, 3),
    new Player("Niles", "Fillips", "11324", 4, 3)
  ]
  addPlayer(player : Player, isHomeTeam: boolean){
    if(isHomeTeam){
      this.homeTeam.push(player);
    } else
      this.awayTeam.push(player);

  }

  removePlayerByPlayerNumber(player: Player, isHomeTeam: boolean){
    var i;
    if(isHomeTeam){
        i = this.homeTeam.indexOf(player,0);
        if(i > -1){
          this.homeTeam.splice(i,0);
        }
    } else{
        i = this.awayTeam.indexOf(player,0);
        if(i > -1){
          this.awayTeam.splice(i,0);
        }
    }


  }
  updatePlayer(playerNumber: string, player: Player, isHomeTeam: boolean){
    var i;
    if(isHomeTeam){
        i = this.homeTeam.indexOf(player,0);
        if(i > -1){
          this.homeTeam[i] = player;
        }
    } else{
        i = this.awayTeam.indexOf(player,0);
        if(i > -1){
          this.awayTeam[i] = player;
        }
    }
  }
}

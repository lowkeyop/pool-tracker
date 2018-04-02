import {Player} from '../common/player.model.ts'
export class TeamsService {
  team  = [
    new Player("Cordell", "Kennerly", "02342", 3, 3,),
    new Player("Mike", "Jones", "032416", 8, 3),
    new Player("Steve", "Ricks", "542275", 4, 3),
    new Player("Jake", "LeGuard", "759465", 4, 3),
    new Player("Dave", "Turtle", "781364", 4, 3)
  ]
  addPlayer(player : Player){
    this.team.push(player);
  }
  removeLastPlayer(){
    this.team.pop();
  }

  removePlayerByPlayerNumber(player: Player){
    var i = this.team.indexOf(player,0);
    if(i > -1){
      this.team.splice(i,0);
    }
  }
  updatePlayer(playerNumber: string, player: Player){
    var i = this.team.indexOf(player,0);
    if(i > -1){
      this.team[i] = player;
    }
  }
}

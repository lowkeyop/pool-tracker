import {Player} from '../common/player.model'

export class PlayerService {

  private players = [
    new Player("Cordell", "Kennerly", "02342", 3, 3,),
    new Player("Mike", "Jones", "032416", 8, 3),
    new Player("Steve", "Ricks", "542275", 4, 3),
    new Player("Jake", "LeGuard", "759465", 4, 3),
    new Player("Dave", "Turtle", "781364", 4, 3),
    new Player("Barry", "Lox", "32513", 3, 3,),
    new Player("Nic", "Wilters", "77625", 8, 3),
    new Player("Jojo", "Zolla", "54227", 4, 3),
    new Player("Harry", "Maupza", "43142", 4, 3),
    new Player("Niles", "Fillips", "11324", 4, 3)
  ]

  getAllPlayers(){

    return this.players;
  }
  addPlayer(player: Player){
    this.players.push(player);
  }

  removePlayer(player: Player){
    var i = this.players.indexOf(player,0);
    if(i > -1){
      this.players.splice(i,0);
    }
  }
  getPlayer(pNumber: string){
    const player =  this.getAllPlayers().find(player => player.playerNumber == pNumber);
    return player;
  }
}

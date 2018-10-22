import {Player} from '../common/player.model';

import { Subject } from 'rxjs/Subject';

export class PlayerService {

  playersChanged = new Subject<Player[]>()
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
  private playerFirstNames = [
    "Apryl",
    "Jessica",
    "Naomi",
    "Ehtel",
    "Kattie",
    "Tuyet",
    "Thuy",
    "Desiree",
    "Sha",
    "Monserrate",
    "Bruno",
    "Kris",
    "Eliana",
    "Scarlett",
    "Apolonia",
    "Floy",
    "Malinda",
    "Thi",
    "Mercedes",
    "Enrique",
    "Eugenia",
    "Parker",
    "Lacey",
    "Shelley",
    "Tangela",
    "Kendrick",
    "Coreen"
  ]
  private playerLastNames = [
    "Pell ",
    "Macfarlane ",
    "Hartlage ",
    "Billick ",
    "Anker ",
    "Hornbaker ",
    "Felmlee ",
    "Durrell ",
    "Mattei ",
    "Branscome ",
    "Wild ",
    "Herrin ",
    "Korus ",
    "Wray ",
    "Greenbaum ",
    "Gettings ",
    "Knutsen ",
    "Quan ",
    "Talarico ",
    "Milstead "
  ]

  generateRandomName(){
    var fNameIndex = (Math.floor(Math.random() * this.playerFirstNames.length-1 ));
    var lNameIndex = (Math.floor(Math.random() * this.playerLastNames.length-1 ));

    return this.playerFirstNames[(fNameIndex < 0 ? 0 : fNameIndex)] + " " + this.playerLastNames[(lNameIndex < 0? 0 : lNameIndex)];
  }
  getAllPlayers(){
    return this.players;
  }
  setAllPlayers(playersArray: Player[]){
    this.players = playersArray;
    this.playersChanged.next(this.players);
  }
  addPlayer(player: Player){
    this.players.push(player);
  }

  updatePlayer(updatedPlayer: Player, pNumber: string){
    var index  =  this.getAllPlayers().findIndex(player => player.playerNumber == pNumber);
    this.getAllPlayers[index] = updatedPlayer;
  }

  removePlayer(player: Player){
    var i = this.players.indexOf(player,0);
    if(i > -1){
      this.players.splice(i,1);
    }
    
  }
  getPlayer(pNumber: string){
    const player =  this.getAllPlayers().find(player => player.playerNumber == pNumber);
    return player;
  }

  getPlayersCount(){
    return this.players.length.toString();
  }
}

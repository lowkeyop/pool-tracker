import { Player} from './player.model';
export class Game {
  // constructor(public gameNo: number, public p1: string, public p2: string, public innings: number, public p1DefShots: number, public p2DefShots: number, public eob:boolean, public bnr: boolean, public p1Timeout: number,  public p2Timeout: number) {}
  constructor(public gameNo: number,
     public p1: Player,
     public p2 : Player,
     public eob:boolean,
     public bnr: boolean,
     public winner: string){}

}

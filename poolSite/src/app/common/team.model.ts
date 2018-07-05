import { Player } from '../common/player.model';
export class Team {
  constructor(
     public players: Player[],
    public teamName: string
    // public teamNumber: string,
    // public hostLocation: string,
    // public teamCaptain: string, ///eventually change to use Player model
    // public teamCoCaptain: string ///eventually change to use Player model
  ){}
}

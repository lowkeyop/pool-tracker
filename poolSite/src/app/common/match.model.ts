
import { Game } from './game.model';
import { Player } from './player.model';

export class Match {
  constructor(
    public homeTeamPlayer: Player,
    public awayTeamPlayer: Player,
    public winner: Player,
    public games: Game[],
    public totalHomeTeamTimeoutsTaken: number=0,
    public totalAwayTeamTimeoutsTaken: number=0,
    public homeTeamPlayerTotalDefensiveShots: number=0,
    public awayTeamPlayerTotalDefensiveShots: number=0,
    public homeTeamPlayerPointsEarned: number=0,
    public awayTeamPlayerPointsEarned: number=0,
    public awayTeamPlayerBreakAndRuns: number=0,
    public homeTeamPlayerBreakAndRuns: number=0,
    public awayTeamPlayerEightOnBreak: number=0,
    public homeTeamPlayerEightOnBreak: number=0
  ){}
  takenTimeOutsForPlayer(player: Player){
    var timeoutsTaken :number =0;
    for(let game of this.games){
      if(player == this.homeTeamPlayer){
        timeoutsTaken+=this.game.p1TimeoutsTaken;
      }
      if(player == this.awayTeamPlayer){
        timeoutsTaken+=this.game.p2TimeoutsTaken;
      }
    }
    return timeoutsTaken;
  }
  BreakNRunsForPlayer(player: Player){
    var totalBreakNRuns :number =0;
    for(let game of this.games){
      if(player == this.homeTeamPlayer && this.game.bnr && this.game.winner == player){
        totalBreakNRuns++;
      }
      if(player == this.awayTeamPlayer && this.game.bnr && this.game.winner == player){
        totalBreakNRuns++;
      }
    }
    return totalBreakNRuns;
  }
  EightOnBreaksForPlayer(player: Player){
    var totalEightOnBreaks :number =0;
    for(let game of this.games){
      if(player == this.homeTeamPlayer && this.game.bnr && this.game.winner == player){
        totalEightOnBreaks++;
      }
      if(player == this.awayTeamPlayer && this.game.bnr && this.game.winner == player){
        totalEightOnBreaks++;
      }
    }
    return totalEightOnBreaks;
  }
  countInnings(){
    var count =0;
    for(let game of this.games){
      count+=game.innings;
    }
    return count;
  }
  summarizeMatchInfo(){
    var homeTeamPlayerTOs: number;
    var awayTeamPlayerTOs: number;

    var homeTeamBNRs: number;
    var awayTeamBNRs: number;

    var homeTeamEOBs: number;
    var awayTeamEOBs: number;

    var totalInnings: number;

    homeTeamPlayerTOs = this.takenTimeOutsForPlayer(this.homeTeamPlayer);
    awayTeamPlayerTOs = this.takenTimeOutsForPlayer(this.awayTeamPlayer);

    homeTeamBNRs = this.BreakNRunsForPlayer(this.homeTeamPlayer);
    awayTeamBNRs = this.BreakNRunsForPlayer(this.awayTeamPlayer);

    homeTeamEOBs = this.EightOnBreaksForPlayer(this.homeTeamPlayer);
    awayTeamEOBs = this.EightOnBreaksForPlayer(this.awayTeamPlayer);

    totalInnings = this.countInnings();

  }
}

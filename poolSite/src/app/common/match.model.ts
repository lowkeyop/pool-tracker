
import { Game } from './game.model';
import { Player } from './player.model';

export class Match {
  constructor(
    public homeTeamPlayer: Player,
    public awayTeamPlayer: Player,

    public homeTeamWinGoal: number,
    public awayTeamWinGoal: number,


    public winner: Player,
    public games: Game[],
    public totalHomeTeamTimeoutsTaken: number=0,
    public totalAwayTeamTimeoutsTaken: number=0,
    public totalInnings: number=0,

    public awayTeamPlayerEightOnBreak: number=0,
    public homeTeamPlayerEightOnBreak: number=0,

    public awayTeamPlayerBreakAndRuns: number=0,
    public homeTeamPlayerBreakAndRuns: number=0,

    public homeTeamPlayerTotalDefensiveShots: number=0,
    public awayTeamPlayerTotalDefensiveShots: number=0,

    public homeTeamPlayerGamesWon: number=0,
    public awayTeamPlayerGamesWon: number=0,

    public homeTeamPlayerPointsEarned: number=0,
    public awayTeamPlayerPointsEarned: number=0
  ){}


  determineWinPlayerWinGoal(player: Player, opp: Player){
    var tSkillLevel = player.playerSkillLevel;
    var oSkillLevel = opp.playerSkillLevel;
    var winGoal = 0;
    if (tSkillLevel == 2 || oSkillLevel == 2) {
				winGoal = tSkillLevel;
			} else if (tSkillLevel > 2) {
				winGoal = tSkillLevel - 1;
			} else if (tSkillLevel == 7 && (oSkillLevel > 3)) {
				winGoal = tSkillLevel - 2;
			} else if (tSkillLevel == 7 && oSkillLevel == 2) {
				winGoal = tSkillLevel;
			}
      return winGoal;
  }
  takenTimeOutsForPlayer(player: Player){
    var timeoutsTaken :number =0;
    for(let game of this.games){
      if(player == this.homeTeamPlayer){
        timeoutsTaken+=game.p1TimeoutsTaken;
      }
      if(player == this.awayTeamPlayer){
        timeoutsTaken+=game.p2TimeoutsTaken;
      }
    }
    return timeoutsTaken;
  }
  countTotalInnings(){
    var count =0;
    for(let game of this.games){
      count+=game.innings;
    }
    return count;
  }
  eightOnBreaksForPlayer(player: Player){
    var totalEightOnBreaks :number =0;
    for(let game of this.games){
      if(player == this.homeTeamPlayer && game.bnr && game.winner == player){
        totalEightOnBreaks++;
      }
      if(player == this.awayTeamPlayer && game.bnr && game.winner == player){
        totalEightOnBreaks++;
      }
    }
    return totalEightOnBreaks;
  }
  breakNRunsForPlayer(player: Player){
    var totalBreakNRuns :number =0;
    for(let game of this.games){
      if(player == this.homeTeamPlayer && game.bnr && game.winner == player){
        totalBreakNRuns++;
      }
      if(player == this.awayTeamPlayer && game.bnr && game.winner == player){
        totalBreakNRuns++;
      }
    }
    return totalBreakNRuns;
  }
  determineGamesWon(player: Player){
    var winCount = 0;
    for(let game of this.games){
      if(game.winner == player){
        winCount++;
      }
    }
    return winCount;
  }
  determinePointsEarned(player: Player){
    var winGoal: number;
    var totalWins: number;
    var pointsEarned: number;
    var opponent: Player;
    var oppMadeItToHill: boolean
    var madeItToHill: boolean;

    if(player == this.homeTeamPlayer && player == this.winner){
      winGoal = this.determineWinPlayerWinGoal(this.homeTeamPlayer, this.awayTeamPlayer);
      totalWins = this.determineGamesWon(this.homeTeamPlayer);
      opponent = this.awayTeamPlayer;
    } else if(player == this.homeTeamPlayer && player == this.winner){
      winGoal = this.determineWinPlayerWinGoal(this.awayTeamPlayer, this.homeTeamPlayer);
      totalWins = this.determineGamesWon(this.awayTeamPlayer);
      opponent = this.homeTeamPlayer;
    }
    oppMadeItToHill = this.determineWinPlayerWinGoal(opponent, player) - this.determineGamesWon(opponent) == 1;
    madeItToHill = this.determineWinPlayerWinGoal(player, opponent) - this.determineGamesWon(player) == 1;
    var isShutout = totalWins = 0;
    var wonAGame = totalWins > 0;
    if(isShutout){
      pointsEarned = 0;
    }
    if(player != this.winner && madeItToHill){
      pointsEarned = 1;
    }
    if(player == this.winner && oppMadeItToHill){
      pointsEarned = 2;
    }
    else
      pointsEarned = 3;

    return pointsEarned;
  }

  summarizeMatchInfo(){

    this.homeTeamWinGoal = this.determineWinPlayerWinGoal(this.homeTeamPlayer, this.awayTeamPlayer);
    this.awayTeamWinGoal = this.determineWinPlayerWinGoal(this.awayTeamPlayer, this.homeTeamPlayer);

    this.totalHomeTeamTimeoutsTaken = this.takenTimeOutsForPlayer(this.homeTeamPlayer);
    this.totalAwayTeamTimeoutsTaken = this.takenTimeOutsForPlayer(this.awayTeamPlayer);

    this.totalInnings = this.countTotalInnings();

    this.homeTeamPlayerEightOnBreak= this.eightOnBreaksForPlayer(this.homeTeamPlayer);
    this.awayTeamPlayerEightOnBreak = this.eightOnBreaksForPlayer(this.awayTeamPlayer);

    this.homeTeamPlayerBreakAndRuns = this.breakNRunsForPlayer(this.homeTeamPlayer);
    this.awayTeamPlayerBreakAndRuns = this.breakNRunsForPlayer(this.awayTeamPlayer);

    this.homeTeamPlayerTotalDefensiveShots = 0;//TODO: will need to capture this information in Game model
    this.awayTeamPlayerTotalDefensiveShots =0;;//TODO: will need to capture this information in Game model 

    this.homeTeamPlayerGamesWon = this.determineGamesWon(this.homeTeamPlayer);
    this.awayTeamPlayerGamesWon = this.determineGamesWon(this.awayTeamPlayer);

    this.homeTeamPlayerPointsEarned = this.determinePointsEarned(this.homeTeamPlayer);
    this.awayTeamPlayerPointsEarned = this.determinePointsEarned(this.awayTeamPlayer);

  }
}

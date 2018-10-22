
import { Game } from './game.model';
import { Player } from './player.model';

export class Match {
  constructor(
    public matchNo: number,
    public homeTeamPlayer: Player,
    public awayTeamPlayer: Player,

    public games: Game[],
    public winner: Player,

    public homeTeamWinGoal: number = 0,
    public awayTeamWinGoal: number = 0,


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
    var tSkillLevel = player.skillLevels;
    var oSkillLevel = opp.skillLevels;
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
  countDefensiveShots(player: Player){
    var defensiveShots :number =0;
    for(let game of this.games){
      if(player == this.homeTeamPlayer){
        defensiveShots+=game.p1DefensiveShots;
      }
      if(player == this.awayTeamPlayer){
        defensiveShots+=game.p2DefensiveShots;
      }
    }
    return defensiveShots;
  }
  eightOnBreaksForPlayer(player: Player){
    var totalEightOnBreaks :number =0;
    for(let game of this.games){
      if(player == this.homeTeamPlayer && game.eob && game.winner == player){
        totalEightOnBreaks++;
      }
      if(player == this.awayTeamPlayer && game.eob && game.winner == player){
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
    var pointsEarned: number = 0;
    var isHomeTeamWinner:boolean = this.winner == this.homeTeamPlayer;

    if(this.winner != null){
      if(player == this.winner){
        var opponentGamesWon = (isHomeTeamWinner? this.awayTeamPlayerGamesWon: this.homeTeamPlayerGamesWon);
        pointsEarned = opponentGamesWon > 0? 2 : 3;
      }
      if(player != this.winner){
        var gamesWon = (!isHomeTeamWinner? this.homeTeamPlayerGamesWon :this.awayTeamPlayerGamesWon);
        var gameGoal = (!isHomeTeamWinner? this.homeTeamWinGoal:this.awayTeamWinGoal);
        if(gameGoal - gamesWon == 1){
          pointsEarned = 1;
        }
        if(gameGoal - gamesWon > 1 ){
          pointsEarned = 0;
        }
      }
    }

    return pointsEarned;
  }

  determineMatchWinner(){
    if(this.homeTeamPlayerGamesWon >= this.homeTeamWinGoal){
      this.winner = this.homeTeamPlayer
    }
    else if(this.awayTeamPlayerGamesWon >= this.awayTeamWinGoal){
      this.winner = this.awayTeamPlayer;
    }
    else
    console.log("Neither player has reached their goal");
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

    this.determineMatchWinner();
    if(this.winner != null){
      this.homeTeamPlayerPointsEarned = this.determinePointsEarned(this.homeTeamPlayer);
      this.awayTeamPlayerPointsEarned = this.determinePointsEarned(this.awayTeamPlayer);
    }
  }
}

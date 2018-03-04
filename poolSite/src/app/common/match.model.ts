
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
}

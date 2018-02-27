
import { Game } from './game.model';
import { Player } from './player.model';

export class Match {
  constructor(
    public homeTeamPlayer: Player,
    public awayTeamPlayer: Player,
    public winner: Player,
    public games: Game[],
    public totalHomeTeamTimeoutsTaken: number,
    public totalAwayTeamTimeoutsTaken: number,
    public homeTeamPlayerTotalDefensiveShots: number,
    public awayTeamPlayerTotalDefensiveShots: number,
    public homeTeamPlayerPointsEarned: number,
    public awayTeamPlayerPointsEarned: number,
  ){}
}

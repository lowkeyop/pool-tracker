import {SkillLevel} from './skill-level.model';
export class RegisterPlayer {
  constructor(
    public fName: string,
    public lName: string,
    public playerNumber: string,
    public playerSkillLevel?: SkillLevel[],
    public matchesPlayed?: number,
  ){}
}

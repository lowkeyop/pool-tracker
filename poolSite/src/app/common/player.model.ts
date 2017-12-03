export class Player {
  constructor(
    public fName: string,
    public lName: string,
    public playerNumber: string,
    public playerSkillLevel: number,
    public raceTo : number,
    public timeOuts: number,
    public defShots: number,
    public matchesPlayed: number
  ){}
}

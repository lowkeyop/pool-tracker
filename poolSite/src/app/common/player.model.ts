export class Player {
  constructor(
    public firstName: string,
    public lastName: string,
    public playerNumber: string,
    public skillLevels: number,
    public matchesPlayed?: number,
  ){}

  getFullName(){
    return this.firstName + " " + this.lastName;
  }
}

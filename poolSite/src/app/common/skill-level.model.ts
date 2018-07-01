export class SkillLevel {
  constructor(
    public leagueName :string,
    public formats: {format: string, skillLevel: number}[]
  ){}
}

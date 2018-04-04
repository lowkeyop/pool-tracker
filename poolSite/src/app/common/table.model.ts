export class Table {
  constructor(
    public tableNumber : number,
    public player1 : {id: number, name: string} = {id: -1, name: "Add Next Players To Table"},
    public player2 : {id: number, name: string} = {id: -1, name: "Add Next Players To Table"},
    public winner: {id: number, name: string} = undefined
  ){}
}

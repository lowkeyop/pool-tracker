import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eight-ball',
  templateUrl: './eight-ball.component.html',
  styleUrls: ['./eight-ball.component.css']
})
export class EightBallComponent implements OnInit {

  constructor() { this.gameCount =0;}
  gameCount;
  games = [];

  onAddGame(){
    this.gameCount++;
    this.games.push(this.gameCount);
    console.log("variable gameCount ="+ this.gameCount);
  }
  onRemoveGame(){
    this.games.pop();
  }
  ngOnInit() {
  }

}

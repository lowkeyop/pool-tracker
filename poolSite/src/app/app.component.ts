import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pool Tracker';
  selectedView = "match";

  changeView(view : string){
    this.selectedView = view;
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  showMatchView : boolean = true;
  showTableDistributeView : boolean = false;
  showAdministrativeView : boolean = false;
  @Output() selectedView: EventEmitter<string> = new EventEmitter<string>();

  toggleView( viewName : string){
    switch(viewName){
      case "match" : {
        this.showMatchView = true;
        this.showTableDistributeView = false;
        this.showAdministrativeView  = false;
        this.selectedView.emit(viewName);
        break;
      }
      case "tables" : {
        this.showMatchView = false;
        this.showTableDistributeView = true;
        this.showAdministrativeView  = false;
        this.selectedView.emit(viewName);
        break;
      }
      case "admin" : {
        this.showMatchView = false;
        this.showTableDistributeView = false;
        this.showAdministrativeView  = true;
        this.selectedView.emit(viewName);
        break;
      }
      default :{
        break
      }
    }

  }
  ngOnInit() {
  }

}

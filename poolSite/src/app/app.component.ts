import { Component } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [LoggingService]
})
export class AppComponent {
  title = 'Pool Tracker';
  selectedView = "match";
  constructor(private logger : LoggingService){}
  changeView(view : string){
    this.selectedView = view;
    this.logger.logToConsole("test message");
  }
}

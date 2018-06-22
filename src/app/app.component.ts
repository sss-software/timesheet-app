import {Component} from '@angular/core';
import {TimesheetService} from "./timesheet/timesheet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';

  constructor(private timesheetService: TimesheetService) {

  }

  loadTimesheet() {
    this.timesheetService.loadCurrentTimesheet('Mon May 21 2018 00:00:00');
  }
}

import {Component, OnInit} from '@angular/core';
import {TimesheetService} from "./shared/services/timesheet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private timesheetService: TimesheetService) {

  }

  ngOnInit(): void {
    this.timesheetService.getTimesheets().subscribe(result => console.log(result));
  }
}

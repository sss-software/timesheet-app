import { Component, OnInit } from '@angular/core';
import {TimesheetService} from "./timesheet.service";

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {



  constructor(private timesheetService: TimesheetService) { }

  ngOnInit() {
    this.timesheetService.getTimesheets().subscribe(result => {
      console.log(result);
    })
  }

}

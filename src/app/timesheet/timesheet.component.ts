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
    const date = {year: 2018, month: 4, day: 21};
    this.timesheetService.getTimesheetByStartDate(date).subscribe(result => {
      console.log(result);
    })
  }

}

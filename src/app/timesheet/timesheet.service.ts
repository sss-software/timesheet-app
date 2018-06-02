import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Timesheet} from "../shared/model/timesheet";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class TimesheetService {

  constructor(private httpClient: HttpClient) {
  }

  getTimesheets(): Observable<Timesheet[]> {
    return this.httpClient.get<Timesheet[]>('/assets/timesheet.json');
  }

  getTimesheetByStartDate(date: any): Observable<Timesheet> {
    console.log(date);
    this.getTimesheets().subscribe((result: Timesheet[]) => {
      result.forEach((timesheet: Timesheet) => {
        if (timesheet.startDate === date) {
          return timesheet;
        }
      });
    });
    return null;
  }

}

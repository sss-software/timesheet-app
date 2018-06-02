import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Timesheet} from "../model/timesheet";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class TimesheetService {

  constructor(private httpClient: HttpClient) {
  }

  getTimesheets(): Observable<Timesheet[]> {
    return this.httpClient.get<Timesheet[]>('/assets/timesheet.json');
  }

}

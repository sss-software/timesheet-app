import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Task} from "../shared/model/task";
import {TimeEntry} from "../shared/model/time-entry";
import {Timesheet} from "../shared/model/timesheet";
import {WorkDay} from "../shared/model/work-day";

@Injectable()
export class TimesheetService {

  private _currentTimesheet: BehaviorSubject<Timesheet> = new BehaviorSubject<Timesheet>(null);
  private _timesheets: BehaviorSubject<Timesheet[]> = new BehaviorSubject<Timesheet[]>([]);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Timesheet[]>('./assets/timesheets.json').subscribe(result => {
      this._timesheets.next(result.map(timesheet => new Timesheet(timesheet)));
    })
  }

  get currentTimesheet(): BehaviorSubject<Timesheet> {
    return this._currentTimesheet;
  }

  get timesheets(): BehaviorSubject<Timesheet[]> {
    return this._timesheets;
  }

}

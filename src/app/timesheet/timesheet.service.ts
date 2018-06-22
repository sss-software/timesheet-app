import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Timesheet} from "../shared/model/timesheet";

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

  loadCurrentTimesheet(date: string) {
    for (let timesheet: Timesheet of this._timesheets.getValue()) {
      if (timesheet.startDate.toISOString() === new Date(date).toISOString()) {
        this._currentTimesheet.next(timesheet);
      }
    }
  }

  get timesheets(): BehaviorSubject<Timesheet[]> {
    return this._timesheets;
  }

}

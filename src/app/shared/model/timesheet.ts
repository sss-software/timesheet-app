import {WorkDay} from "./work-day";

export class Timesheet {

  private _startDate: Date;
  private _week: WorkDay[];

  constructor(obj: Timesheet = {} as Timesheet) {

    let {
      startDate = null,
      week = []
    } = obj;

    this._week = week.map(workDay => new WorkDay(workDay));
    this._startDate = new Date(startDate);
  }

  get week(): any {
    return this._week;
  }

  set week(value: any) {
    this._week = value;
  }
  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

}

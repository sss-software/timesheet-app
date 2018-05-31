import {Time} from "./time";
import {TimeEntry} from "./time-entry";

export class WorkDay {

  private _startTime: Time;
  private _endTime: Time;
  private _date: Date;
  private _entries: TimeEntry[];


  get startTime(): Time {
    return this._startTime;
  }

  set startTime(value: Time) {
    this._startTime = value;
  }

  get endTime(): Time {
    return this._endTime;
  }

  set endTime(value: Time) {
    this._endTime = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get entries(): TimeEntry[] {
    return this._entries;
  }

  set entries(value: TimeEntry[]) {
    this._entries = value;
  }

}

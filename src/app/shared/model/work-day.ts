import {TimeEntry} from "./time-entry";

export class WorkDay {

  private _startTime: Date;
  private _endTime: Date;
  private _date: Date;
  private _entries: TimeEntry[];

  constructor(obj: WorkDay = {} as WorkDay) {
    let {
      startTime = null,
      endTime = null,
      date = null,
      entries = []
    } = obj;
    this._startTime = new Date(startTime);
    this._endTime = new Date(endTime);
    this._date = new Date(date);
    this._entries = entries.map(timeEntry => new TimeEntry(timeEntry));
  }

  get startTime(): Date {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
  }

  get endTime(): Date {
    return this._endTime;
  }

  set endTime(value: Date) {
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

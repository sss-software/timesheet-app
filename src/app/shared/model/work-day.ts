import {Time} from "./time";
import {TimeEntry} from "./time-entry";

export class WorkDay {
  _startTime: Time;
  _endTime: Time;
  _date: Date;
  _entries: TimeEntry[];
}

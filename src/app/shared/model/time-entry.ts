import {Task} from "./task";
import {Time} from "./time";

export class TimeEntry {

  private _time: Time;
  private _task: Task;

  get time(): Time {
    return this._time;
  }

  set time(value: Time) {
    this._time = value;
  }

  get task(): Task {
    return this._task;
  }

  set task(value: Task) {
    this._task = value;
  }

}

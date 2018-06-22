import {Duration} from "./duration";
import {Task} from "./task";

export class TimeEntry {

  private _duration: Duration;
  private _task: Task;

  constructor(obj: TimeEntry = {} as TimeEntry) {
    let {
      task = null,
      duration = null
    } = obj;
    this._task = new Task(task);
    this._duration = new Duration(duration);
  }

  get duration(): Duration {
    return this._duration;
  }

  set duration(value: Duration) {
    this._duration = value;
  }

  get task(): Task {
    return this._task;
  }

  set task(value: Task) {
    this._task = value;
  }

}

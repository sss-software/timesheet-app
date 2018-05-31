import {CodedEntity} from "./coded-entity";
import {Task} from "./task";

export class Project extends CodedEntity {

  private _tasks: Task[];

  get tasks(): Task[] {
    return this._tasks;
  }

  set tasks(value: Task[]) {
    this._tasks = value;
  }

}

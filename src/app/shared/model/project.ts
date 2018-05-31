import {CodedEntity} from "./coded-entity";
import {Task} from "./task";

export class Project extends CodedEntity {
  _tasks: Task[];
}

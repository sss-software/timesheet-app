import {CodedEntity} from "./coded-entity";
import {Project} from "./project";

export class Task extends CodedEntity {

  private _project: Project;

  get project(): Project {
    return this._project;
  }

  set project(value: Project) {
    this._project = value;
  }

}

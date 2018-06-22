import {CodedEntity} from "./coded-entity";

export class Task extends CodedEntity {

  private _projectCode: string;

  constructor(obj: Task = {} as Task) {
    super(obj);
    let {
      projectCode = ""
    } = obj;
    this._projectCode = projectCode;
  }

  get projectCode(): string {
    return this._projectCode;
  }

  set projectCode(value: string) {
    this._projectCode = value;
  }

}

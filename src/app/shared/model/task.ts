import {CodedEntity} from "./coded-entity";

export class Task extends CodedEntity {
  get projectCode(): string {
    return this._projectCode;
  }

  set projectCode(value: string) {
    this._projectCode = value;
  }

  private _projectCode: string;

}

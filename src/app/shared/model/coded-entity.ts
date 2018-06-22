export abstract class CodedEntity {

  private _code: string;
  private _description: string;

  protected constructor(obj: CodedEntity = {} as CodedEntity) {
    let {
      code = "",
      description = ""
    } = obj;
    this._code = code;
    this._description = description;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

}

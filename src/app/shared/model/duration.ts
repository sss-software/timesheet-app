export class Duration {

  private _decimal: number;

  constructor(obj: Duration = {} as Duration) {

    let {
      decimal = 0
    } = obj;

    this._decimal = decimal;

  }

  get decimal(): number {
    return this._decimal;
  }

  set decimal(value: number) {
    this._decimal = value;
  }
}

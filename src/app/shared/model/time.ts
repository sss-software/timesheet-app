export class Time {

  private _hour: number;
  private _minute: number;

  get hour(): number {
    return this._hour;
  }

  set hour(value: number) {
    this._hour = value;
  }

  get minute(): number {
    return this._minute;
  }

  set minute(value: number) {
    this._minute = value;
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TimesheetService {

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('localhost:8080/assets/timesheet.json').subscribe(result => console.log(result));
  }
}

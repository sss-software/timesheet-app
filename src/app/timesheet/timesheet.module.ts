import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimesheetComponent} from './timesheet.component';
import {SharedModule} from "../shared/shared.module";
import { DayComponent } from './day/day.component';
import {TimesheetService} from "./timesheet.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    TimesheetService
  ],
  declarations: [TimesheetComponent, DayComponent],
  exports: [TimesheetComponent]
})
export class TimesheetModule {
}

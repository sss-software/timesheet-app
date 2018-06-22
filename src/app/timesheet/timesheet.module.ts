import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {SuiModule} from "ng2-semantic-ui";
import {TimesheetComponent} from './timesheet.component';
import {SharedModule} from "../shared/shared.module";
import { DayComponent } from './day/day.component';
import {TimesheetService} from "./timesheet.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SuiModule
  ],
  providers: [
    TimesheetService
  ],
  declarations: [TimesheetComponent, DayComponent],
  exports: [TimesheetComponent]
})
export class TimesheetModule {
}

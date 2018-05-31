import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimesheetService} from "./services/timesheet.service";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule { }

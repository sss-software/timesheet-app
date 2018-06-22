import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {TimesheetService} from "./timesheet/timesheet.service";
import {TimesheetModule} from "./timesheet/timesheet.module";
import {SuiModule} from "ng2-semantic-ui";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimesheetModule,
    SharedModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {SuiModule} from "ng2-semantic-ui";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SuiModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule { }

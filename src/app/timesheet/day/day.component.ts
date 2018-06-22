import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get entries(): FormArray {
    return this.form.get('_entries') as FormArray;
  }

}

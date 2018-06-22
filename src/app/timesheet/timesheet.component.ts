import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Task} from "../shared/model/task";
import {TimeEntry} from "../shared/model/time-entry";
import {WorkDay} from "../shared/model/work-day";
import {TimesheetService} from "./timesheet.service";
import {log} from "util";

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  form: FormGroup;

  constructor(private timesheetService: TimesheetService,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      _startDate: null,
      week: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.timesheetService.timesheets.subscribe(result => {
      if (result[0]) {
        this.form.patchValue(result[0]);
        this.setDays(result[0].week);
      }
    });
    this.observeFormChanges();
  }

  setDays(days: WorkDay[]) {
    const formGroups = days.map(day => this.formBuilder.group({
      _startTime: day.startTime,
      _endTime: day.endTime,
      _date: day.date,
      _entries: this.setEntries(day.entries)
    }));
    const formArray = this.formBuilder.array(formGroups);
    this.form.setControl('week', formArray);
  }

  setEntries(entries: TimeEntry[]): FormArray {
    const formGroups = entries.map(entry => this.formBuilder.group({
      _duration: this.formBuilder.group(entry.duration),
      _task: this.formBuilder.group({
        _code: entry.task.code,
        _description: entry.task.description,
        _projectCode: entry.task.projectCode
      })
    }));
    return this.formBuilder.array(formGroups);
  }

  get week(): FormArray {
    return this.form.get('week') as FormArray;
  }

  observeFormChanges() {
    // const debounce = this.form.valueChanges.debounce(() => Observable.interval(1500));
    // debounce.subscribe(value => {
    this.form.valueChanges.subscribe(value => {
      if (this.form.dirty && this.form.valid) {
        console.log(this.form);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-process-edit',
  templateUrl: './process-edit.component.html',
  styleUrls: ['./process-edit.component.css']
})
export class ProcessEditComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      steps: new FormControl(null, [Validators.required]),
    });
  }

}

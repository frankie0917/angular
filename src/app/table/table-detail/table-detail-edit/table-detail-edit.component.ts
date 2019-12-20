import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableDetailService } from '../table-detail.service';

@Component({
  selector: 'app-table-detail-edit',
  templateUrl: './table-detail-edit.component.html',
  styleUrls: ['./table-detail-edit.component.css']
})
export class TableDetailEditComponent implements OnInit {
  form: FormGroup;
  constructor(private tableDetailService: TableDetailService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
    })
  }

  submitForm() {
    let f = this.form.value;
    this.tableDetailService.addData(f.name, f.description);
  }

}

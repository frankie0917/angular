import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableDetailService } from '../table-detail.service';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-detail-edit',
  templateUrl: './table-detail-edit.component.html',
  styleUrls: ['./table-detail-edit.component.css']
})
export class TableDetailEditComponent implements OnInit {
  formGroup: FormGroup;
  formModel: DynamicFormModel;
  tableId;
  editMode:boolean = !window.location.href.endsWith('create');

  constructor(
    private tableDetailService: TableDetailService,
    private formService: DynamicFormService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {

    this.tableId = this.tableDetailService.getCurrentTableId();

    this.formModel = this.formService.fromJSON([
      {
        "type": "INPUT",
        "id": "name",
        "label": "名称",
        "placeholder": "输入名称"
      },
      {
        "type": "TEXTAREA",
        "id": "description",
        "label": "描述",
        "placeholder": "输入描述"
      },
    ]);

    this.formGroup = this.formService.createFormGroup(this.formModel);
  }

  submitForm() {
    let f = this.formGroup.value;
    this.tableDetailService.addData(f.name, f.description);
    this.formGroup.reset();
    this.router.navigate(['table/detail',this.tableId,'list']);
  }

}

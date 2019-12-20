import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcessComponent } from './process/process.component';
import { ProcessListComponent } from './process/process-list/process-list.component';
import { ProcessDetailComponent } from './process/process-detail/process-detail.component';
import { ProcessEditComponent } from './process/process-edit/process-edit.component';
import { TableComponent } from './table/table.component';
import { TableListComponent } from './table/table-list/table-list.component';
import { TableEditComponent } from './table/table-edit/table-edit.component';
import { TableDetailComponent } from './table/table-detail/table-detail.component';
import { TableDetailListComponent } from './table/table-detail/table-detail-list/table-detail-list.component';
import { TableDetailEditComponent } from './table/table-detail/table-detail-edit/table-detail-edit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'process', component: ProcessComponent, children: [
      { path: 'list', component: ProcessListComponent },
      { path: 'create', component: ProcessEditComponent },
      { path: 'edit/:id', component: ProcessEditComponent },
      { path: 'detail/:id', component: ProcessDetailComponent },
    ]
  },
  {
    path: 'table', component: TableComponent, children: [
      { path: 'list', component: TableListComponent },
      { path: 'edit/:id', component: TableEditComponent },
      { path: 'create', component: TableEditComponent },
      {
        path: 'detail/:id', component: TableDetailComponent, children: [
          { path: 'list', component: TableDetailListComponent },
          { path: 'edit/:id', component: TableDetailEditComponent },
          { path: 'create', component: TableDetailEditComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

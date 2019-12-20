import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProcessComponent } from './process/process.component';
import { ProcessDetailComponent } from './process/process-detail/process-detail.component';
import { ProcessListComponent } from './process/process-list/process-list.component';
import { HomeComponent } from './home/home.component';
import { ProcessEditComponent } from './process/process-edit/process-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TableEditComponent } from './table/table-edit/table-edit.component';
import { TableListComponent } from './table/table-list/table-list.component';
import { TableDetailComponent } from './table/table-detail/table-detail.component';
import { TableDetailListComponent } from './table/table-detail/table-detail-list/table-detail-list.component';
import { TableDetailEditComponent } from './table/table-detail/table-detail-edit/table-detail-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormsMaterialUIModule } from "@ng-dynamic-forms/ui-material";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ProcessComponent,
    ProcessDetailComponent,
    ProcessListComponent,
    HomeComponent,
    ProcessEditComponent,
    TableComponent,
    TableEditComponent,
    TableListComponent,
    TableDetailComponent,
    TableDetailListComponent,
    TableDetailEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    DynamicFormsMaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

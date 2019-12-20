import {
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatSliderModule,
  MatCardModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
})
export class MaterialModule { }

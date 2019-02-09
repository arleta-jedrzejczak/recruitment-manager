import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';

const MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
})
export class MaterialModule { }

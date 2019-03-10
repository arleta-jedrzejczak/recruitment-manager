import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';

import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyListComponent } from './company-list/company-list.component';

import { reducer } from './state/company.reducer';

// FIXME: Add to shared module
import { MaterialModule } from '.././material';

@NgModule({
  declarations: [
    CompanyCreateComponent,
    CompanyListComponent
  ],
  imports: [
    StoreModule.forFeature('companies', reducer),
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule
  ],
  exports: [
    CompanyCreateComponent,
    CompanyListComponent
  ],
  providers: []
})
export class CompaniesModule { }

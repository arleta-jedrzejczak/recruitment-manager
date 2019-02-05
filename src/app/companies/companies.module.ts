import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { StoreModule } from '@ngrx/store';

import { CompanyCreateComponent } from './company-create/company-create.component';

import { reducer } from './state/company.reducer';

@NgModule({
  declarations: [
    CompanyCreateComponent
  ],
  imports: [
    StoreModule.forFeature('companies', reducer),
    ReactiveFormsModule
  ],
  exports: [
    CompanyCreateComponent
  ],
  providers: []
})
export class CompaniesModule { }

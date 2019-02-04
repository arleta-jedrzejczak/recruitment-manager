import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { CompanyCreateComponent } from './company-create/company-create.component';

import { reducer } from './state/company.reducer';

@NgModule({
  declarations: [
    CompanyCreateComponent
  ],
  imports: [
    StoreModule.forFeature('companies', reducer)
  ],
  exports: [
    CompanyCreateComponent
  ],
  providers: []
})
export class CompaniesModule { }

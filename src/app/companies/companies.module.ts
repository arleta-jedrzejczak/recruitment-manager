import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { CompanyCreateComponent } from './company-create/company-create.component';

import { reducer } from './state/company.reducer';

// FIXME: Add to shared module
import { MaterialModule } from '.././material';

@NgModule({
  declarations: [
    CompanyCreateComponent
  ],
  imports: [
    StoreModule.forFeature('companies', reducer),
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CompanyCreateComponent
  ],
  providers: []
})
export class CompaniesModule { }

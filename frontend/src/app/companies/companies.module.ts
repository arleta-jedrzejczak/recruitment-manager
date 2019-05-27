import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyListComponent } from './company-list/company-list.component';

import { CompaniesEffects } from './state/companies.effects';

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
    BrowserModule,
    EffectsModule.forFeature([CompaniesEffects]),
    HttpClientModule
  ],
  exports: [
    CompanyCreateComponent,
    CompanyListComponent
  ],
  providers: []
})
export class CompaniesModule { }

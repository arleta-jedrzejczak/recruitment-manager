import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyCreateComponent } from './components/company-create/company-create.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyShellComponent } from './containers/company-shell/company-shell.component';
import { CompaniesEffects } from './state/companies.effects';
import { reducer } from './state/company.reducer';
// FIXME: Add to shared module
import { MaterialModule } from '.././material';

const COMPONENTS = [
  CompanyShellComponent,
  CompanyCreateComponent,
  CompanyListComponent
];

@NgModule({
  declarations: [
    COMPONENTS
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
    COMPONENTS
  ],
  providers: []
})
export class CompaniesModule {
}

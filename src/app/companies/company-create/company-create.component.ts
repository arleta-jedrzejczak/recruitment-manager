import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CompanyInterface } from '../company.interface';

import { Store } from '@ngrx/store';

import * as fromCompany from '../state/company.reducer';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent {

  companysForm = new FormGroup({
    newCompanyName: new FormControl(''),
    newCompanyDescription: new FormControl(''),
  });

  constructor(private store: Store<fromCompany.State>) { }

  onAddNewCompany(company: CompanyInterface): void {
    this.store.dispatch({
      type: 'ADD_NEW_COMAPNY',
      payload: company
    });
  }

}

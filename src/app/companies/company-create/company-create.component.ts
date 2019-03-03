import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromCompany from '../state/company.reducer';
import * as productActions from '../state/company.actions';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {

  companysForm: FormGroup;

  constructor(private store: Store<fromCompany.State>) { }

  ngOnInit(): void {
    this.companysForm = new FormGroup({
      'companyName': new FormControl(null, Validators.required),
      'companyDescription': new FormControl(null, Validators.required),
    });
  }

  onAddNewCompany(): void {
    this.store.dispatch(new productActions.AddNewCompany(this.companysForm.value));
    // TODO: Add clearing values after add new company without validation conflict
  }

}

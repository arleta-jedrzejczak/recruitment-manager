import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators }      from '@angular/forms';

import { CompanyInterface } from '../../company.interface';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {

  @Output() onAddNewCompanyEvent: EventEmitter<CompanyInterface> = new EventEmitter<CompanyInterface>();

  companiesForm: FormGroup;

  ngOnInit(): void {
    this.companiesForm = new FormGroup({
      'companyName': new FormControl(null, Validators.required),
      'companyDescription': new FormControl(null, Validators.required),
    });
  }

  onAddNewCompany(): void {
    this.onAddNewCompanyEvent.emit(this.companiesForm.value);
    // TODO: Add clearing values after add new company without validation conflict
  }
}

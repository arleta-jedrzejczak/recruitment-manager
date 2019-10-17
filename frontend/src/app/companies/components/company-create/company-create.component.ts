import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyInterface } from '../../company.interface';
import { CompaniesService } from '../../companies.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {

  @Output() onAddNewCompanyEvent: EventEmitter<CompanyInterface> = new EventEmitter<CompanyInterface>();

  companiesForm: FormGroup;

  get companyName(): AbstractControl {
    return this.companiesForm.get(CompaniesService.COMPANY_NAME);
  }

  get companyDescription(): AbstractControl {
    return this.companiesForm.get(CompaniesService.COMPANY_DESCRIPTION);
  }

  ngOnInit(): void {
    this.companiesForm = new FormGroup({
      'companyName': new FormControl(null, Validators.required),
      'companyDescription': new FormControl(null, Validators.required),
    });
  }

  onAddNewCompany(): void {
    this.onAddNewCompanyEvent.emit(this.companiesForm.value);
    this.companiesForm.reset();
    this.companiesForm.markAsUntouched();
    this.companiesForm.markAsPristine();
  }
}

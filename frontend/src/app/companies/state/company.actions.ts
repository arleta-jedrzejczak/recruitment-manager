import { Action } from '@ngrx/store';

import { CompanyInterface } from '../company.interface';

export enum CompanyActionTypes {
  AddNewCompany = '[Company] Add New Company'
}

export class AddNewCompany implements Action {
  readonly type = CompanyActionTypes.AddNewCompany;

  constructor(public payload: CompanyInterface) { }
}

export type CompanyActions = AddNewCompany;

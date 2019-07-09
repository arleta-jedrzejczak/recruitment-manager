import { Action } from '@ngrx/store';

import { CompanyInterface } from '../company.interface';

export enum CompanyActionTypes {
  CreateNewCompany = '[Company] Create New Company',
  CreateCompanySuccess = '[Company] Create Company Success',
  CreateCompanyFail = '[Company] Create Company Fail',

  Load = '[Company] Load Companies',
  LoadSuccess = '[Company] Load Companies Success',
  LoadFail = '[Company] Load Companies Fails',

  DeleteCompany = '[Company] Delete Company',
  DeleteCompanySuccess = '[Company] Delete Company Success',
  DeleteCompanyFail = '[Company] Delete Company Fail'
}

export class CreateNewCompany implements Action {
  readonly type = CompanyActionTypes.CreateNewCompany;
  constructor(public payload: CompanyInterface) { }
}

export class CreateCompanySuccess implements Action {
  readonly type = CompanyActionTypes.CreateCompanySuccess;
  constructor(public payload: CompanyInterface) { }
}

export class CreateCompanyFail implements Action {
  readonly type = CompanyActionTypes.CreateCompanyFail;
  constructor(public payload: string) { }
}

export class Load implements Action {
  readonly type = CompanyActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CompanyActionTypes.LoadSuccess;
  constructor(public payload: CompanyInterface[]) { }
}

export class LoadFail implements Action {
  readonly type = CompanyActionTypes.LoadFail;
  constructor(public payload: string) { }
}

export class DeleteCompany implements Action {
  readonly type = CompanyActionTypes.DeleteCompany;

  constructor(public payload: string) { }
}

export class DeleteCompanySuccess implements Action {
  readonly type = CompanyActionTypes.DeleteCompanySuccess;

  constructor(public payload: string) { }
}

export class DeleteCompanyFail implements Action {
  readonly type = CompanyActionTypes.DeleteCompanyFail;

  constructor(public payload: string) { }
}

export type CompanyActions = CreateNewCompany |
                             CreateCompanySuccess |
                             CreateCompanyFail |
                             Load |
                             LoadSuccess |
                             LoadFail |
                             DeleteCompany |
                             DeleteCompanyFail |
                             DeleteCompanySuccess;

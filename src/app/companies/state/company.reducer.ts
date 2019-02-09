import { CompanyInterface } from '../company.interface';

import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
  companies: CompanyState;
}

export interface CompanyState {
  currentCompany: CompanyInterface;
  companies: CompanyInterface[];
}

export function reducer(state: CompanyState, action): CompanyState {
  switch (action.type) {
    case 'ADD_NEW_COMAPNY':
      return {
        ...state,
        companies: action.payload
      };
    default:
      return state;
  }
}

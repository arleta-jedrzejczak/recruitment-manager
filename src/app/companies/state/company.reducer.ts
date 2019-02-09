import { CompanyInterface } from '../company.interface';

import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
  companies: CompanyState;
}

export interface CompanyState {
  currentCompany: CompanyInterface;
  companies: CompanyInterface[];
}

const initialState: CompanyState = {
  currentCompany: null,
  companies: []
};

export function reducer(state = initialState, action): CompanyState {
  switch (action.type) {
    case 'ADD_NEW_COMAPNY':
      return {
        ...state,
        companies: [...state.companies, action.payload]
      };
    default:
      return state;
  }
}

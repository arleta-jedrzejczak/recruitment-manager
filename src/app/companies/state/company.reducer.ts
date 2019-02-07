import { CompanyInterface } from '../company.interface';

export interface CompanyState {
  currentCompany: CompanyInterface;
  companies: CompanyInterface[];
}

export function reducer(state, action) {
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

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

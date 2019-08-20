export default function(state = [], { type, payload }) {
  switch (type) {
    case 'GET_PRODUCTS':
      return payload;
    case 'ADD_PRODUCT':
      return [...state, payload];
    case 'DELETE_PRODUCT':
      return state.filter(product => product.id !== payload);
    case 'REDACT_PRODUCT':
      return state.map(product => (product.id === payload.id ? { ...payload } : product));
    default:
      return state;
  }
}

export default function (state = [], { type, payload }) {
  switch(type) {
    case 'GET_PRODUCTS':
      return payload;
    case 'ADD_PRODUCT':
      return [...state, payload];
    default:
      return state;
  }
}
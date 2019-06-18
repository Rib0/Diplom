export default function (state = [], { type, payload }) {
  switch(type) {
    case 'GET_PRODUCTS':
      return payload;
    default:
      return state;
  }
}
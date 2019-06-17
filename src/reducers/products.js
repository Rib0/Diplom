export default function (state = {}, { type, payload }) {
  switch(type) {
    case 'GET_PRODUCTS':
     return payload;
    case 'SORT_PRODUCTS':
      return {
        ...state,
        sorted: !state.sorted
      };
    case 'CHANGE_CATEGORY': 
      return {
        ...state,
        currentCategory: payload
      };
    case 'TOGGLE_WISHLIST':
      return {
        ...state,
        products: state.products.map(product => payload === product.id ? 
          { ...product, inWishlist: !product.inWishlist } :
          product
        )
      }
    default:
      return state;
  }
}
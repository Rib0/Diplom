export default function (state = {}, { type, payload }) {
  switch(type) {
    case 'GET_ADMIN_INFO': 
      return payload;
    default: 
      return state;
  }
}
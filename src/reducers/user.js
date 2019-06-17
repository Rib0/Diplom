export default function (state = {}, { type, payload }) {
  switch(type) {
    case 'LOG_IN':
      return payload;
    case 'LOG_OUT':
      return null
    default:
      return state;
  }
}
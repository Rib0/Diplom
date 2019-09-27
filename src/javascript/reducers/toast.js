export default function(state = false, { type, payload }) {
  switch (type) {
    case 'TOGGLE_TOAST':
      return payload;
    default:
      return state;
  }
}

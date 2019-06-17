export default function (state = [], { type, payload }) {
  switch(type) {
    case 'GET_COMMENTS':
      return payload;
    case 'ADD_COMMENT': 
      return [...state, payload];
    case 'DELETE_COMMENT':
      return state.filter(comment => comment.id !== payload);
    case 'ACCEPT_COMMENT':
      return state.map(comment => comment.id === payload ? { ...comment, moderated: true } : comment);
    default:
      return state;
  }
}
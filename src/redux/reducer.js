const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = state.find((e) => e.id === action.payload.id);
      if (item) {
        item.count += 1;
        return [...state];
      }
      return [...state, {...action.payload, count: 1}];

    case 'REMOVE_FROM_CART':
      const item2 = state.find((e) => e.id === action.payload.id);
      if (item2) {
        item2.count -= 1;
        if (item2.count > 0) {
          return [...state];
        } else {
          return state.filter((e) => e.id !== action.payload.id);
        }
      } else {
        return null;
      }
    case 'CHECKOUT':
      state = [];
      return state;
    default:
      return state;
  }
};

export default reducer;

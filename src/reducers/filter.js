const CHANGE_FILTER = 'CHANGE_FILTER';

const initialState = {
  filter: 'All',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.category,
      };
    default:
      return state;
  }
};

export default reducer;

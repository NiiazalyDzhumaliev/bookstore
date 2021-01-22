const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const { v4: UuidV4 } = require('uuid');

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: state.books.concat({
          id: UuidV4(),
          title: action.title,
          category: action.category,
        }),
      };
    case REMOVE_BOOK: {
      const updatedArray = state.books.filter(book => book.id !== action.delId);
      return {
        ...state,
        books: updatedArray,
      };
    }
    default:
      return state;
  }
};

export default reducer;

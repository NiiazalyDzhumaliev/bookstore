const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const reducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: state.books.concat({
          id: new Date(),
          title: action.title,
          category: action.category,
        }),
      };
    case REMOVE_BOOK: {
      const updatedArray = state.books.filter(
        book => book.id !== action.bookId,
      );
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

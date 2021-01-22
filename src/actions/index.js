export const CREATE_BOOK = bookObject => ({
  ...bookObject,
  type: 'CREATE_BOOK',
});

export const REMOVE_BOOK = bookId => ({
  type: 'REMOVE_BOOK',
  delId: bookId,
});

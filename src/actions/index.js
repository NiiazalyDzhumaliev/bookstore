export const CREATE_BOOK = bookObject => ({
  ...bookObject,
  type: 'CREATE_BOOK',
});

export const REMOVE_BOOK = bookObject => ({
  type: 'REMOVE_BOOK',
  delId: bookObject.id,
});

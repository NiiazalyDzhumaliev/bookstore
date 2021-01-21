export const CREATE_BOOK = bookObject => ({
  type: 'CREATE_BOOK',
  title: bookObject.title,
  category: bookObject.category,
});

export const REMOVE_BOOK = bookObject => ({
  type: 'REMOVE_BOOK',
  title: bookObject.title,
  category: bookObject.category,
});

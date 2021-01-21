const { v4: UuidV4 } = require('uuid');

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <form id="form">
      <label htmlFor="title">
        Title
        <input type="text" id="title" name="title" />
      </label>
      <br />
      <label htmlFor="categories">
        Choose a category
        <select id="categories" name="category-list">
          {categories.map(category => (
            <option value={category} key={UuidV4()}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
export default BooksForm;

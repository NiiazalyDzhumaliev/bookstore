import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const { v4: UuidV4 } = require('uuid');

const BookList = ({ books }) => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    {books.map(book => (
      <Book bookObject={book} key={UuidV4()} />
    ))}
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(BookList);

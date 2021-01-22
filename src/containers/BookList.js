import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const { v4: UuidV4 } = require('uuid');

const BookList = ({ books }) => (
  <table>
    <tbody>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Remove book</th>
      </tr>
      {books.map(book => (
        <Book bookObject={book} key={UuidV4()} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(BookList);

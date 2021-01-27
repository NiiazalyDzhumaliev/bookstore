import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const { v4: UuidV4 } = require('uuid');

const BookList = props => {
  const {
    books, filter, onDeleteBook, onChangeFilter,
  } = props;
  const handleClick = bookId => {
    onDeleteBook(bookId);
  };

  const handleFilterChange = event => {
    const {
      target: { value },
    } = event;
    onChangeFilter(value);
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Remove book</th>
        </tr>
        {books
          .filter(
            book => filter === 'All' || filter === '' || book.category === filter,
          )
          .map(book => (
            <Book
              bookObject={book}
              key={UuidV4()}
              handleClick={() => handleClick(book.id)}
            />
          ))}
        <CategoryFilter
          handleFilterChange={event => handleFilterChange(event)}
        />
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  books: state.bks.books,
  filter: state.filt.filter,
});

const mapDispatchToProps = dispatch => ({
  onDeleteBook: bookId => dispatch(REMOVE_BOOK(bookId)),
  onChangeFilter: bookCategory => dispatch(CHANGE_FILTER(bookCategory)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

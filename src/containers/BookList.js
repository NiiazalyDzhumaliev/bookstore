import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions';

const { v4: UuidV4 } = require('uuid');

const BookList = props => {
  const { books, filter, onDeleteBook } = props;
  const handleClick = bookId => {
    onDeleteBook(bookId);
  };
  return (
    <div>
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
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.bks.books,
  filter: state.filt.filter,
});

const mapDispatchToProps = dispatch => ({
  onDeleteBook: bookId => dispatch(REMOVE_BOOK(bookId)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

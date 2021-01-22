import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { REMOVE_BOOK } from '../actions';

const Book = props => {
  const { bookObject, onDeleteBook } = props;

  const handleClick = () => {
    onDeleteBook(bookObject);
  };

  return (
    <tr>
      <td>{bookObject.title}</td>
      <td>{bookObject.category}</td>
      <td>
        <button type="button" onClick={handleClick}>
          Delete
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteBook: bookObject => dispatch(REMOVE_BOOK(bookObject)),
});

Book.propTypes = {
  bookObject: PropTypes.objectOf(PropTypes.any).isRequired,
  onDeleteBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Book);

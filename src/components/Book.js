import PropTypes from 'prop-types';

const Book = props => {
  const { bookObject, handleClick } = props;

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

Book.propTypes = {
  bookObject: PropTypes.objectOf(PropTypes.any).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;

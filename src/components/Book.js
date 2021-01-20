import PropTypes from 'prop-types';

const Book = props => {
  const { bookObject } = props;
  return (
    <tr>
      <td>{bookObject.id}</td>
      <td>{bookObject.title}</td>
      <td>{bookObject.category}</td>
    </tr>
  );
};

Book.propTypes = {
  bookObject: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Book;

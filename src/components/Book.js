import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = props => {
  const { bookObject, handleClick } = props;

  return (
    <div className={styles.book_container}>
      <div>
        <p>{bookObject.category}</p>
        <p>{bookObject.title}</p>
        <p>Author</p>
        <button type="button">Comment</button>
        <button type="button" onClick={handleClick}>
          Delete
        </button>
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </div>
      <div className={styles.progress_container}>
        <div className={styles.completed}>
          <p className={styles.circle} />
          <div>
            <p>78%</p>
            <p>Completed</p>
          </div>
        </div>
        <div>
          <p>{'current chapter'.toUpperCase()}</p>
          <p>Chapter 17</p>
          <button type="button">{'update progress'.toUpperCase()}</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookObject: PropTypes.objectOf(PropTypes.any).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;

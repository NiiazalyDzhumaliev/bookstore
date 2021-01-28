import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = props => {
  const { bookObject, handleClick } = props;

  return (
    <div className={styles.book_container}>
      <div className={styles.book_info}>
        <p className={styles.category}>{bookObject.category}</p>
        <p className={styles.title}>{bookObject.title}</p>
        <p className={styles.author}>Author</p>
        <button type="button" className={styles.button}>
          Comment
        </button>
        <button
          type="button"
          onClick={handleClick}
          className={styles.button}
          id={styles.delete}
        >
          Delete
        </button>
        <button type="button" className={styles.button} id={styles.edit}>
          Edit
        </button>
      </div>
      <div className={styles.progress_container}>
        <div className={styles.completed_container}>
          <p className={styles.circle} />
          <div>
            <p className={styles.percent}>78%</p>
            <p className={styles.completed}>Completed</p>
          </div>
        </div>
        <div className={styles.chapter_container}>
          <p className={styles.current_chapter}>
            {'current chapter'.toUpperCase()}
          </p>
          <p className={styles.chapter}>Chapter 17</p>
          <button type="button" className={styles.update_progress}>
            {'update progress'.toUpperCase()}
          </button>
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

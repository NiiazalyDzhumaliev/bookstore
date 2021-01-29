import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions';
import styles from './BooksForm.module.css';

const { v4: UuidV4 } = require('uuid');

const BooksForm = props => {
  const { onSubmitForm } = props;
  const [state, setState] = useState({
    title: '',
    category: '',
  });

  const handleChange = event => {
    const {
      target: { name, value },
    } = event;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    onSubmitForm(state);
    event.preventDefault();
  };

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
    <div id={styles.form_container}>
      <h1 className={styles.header}>{'add new book'.toUpperCase()}</h1>
      <form
        className={styles.form}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Book title"
          className={styles.title_input}
        />

        <br />

        <select
          id={styles.categories}
          name="category"
          value={state.category}
          onChange={handleChange}
        >
          <option value="" key={UuidV4()} disabled defaultValue="">
            Category
          </option>
          {categories.map(category => (
            <option value={category} key={UuidV4()}>
              {category}
            </option>
          ))}
        </select>

        <br />
        <input
          type="submit"
          value={'Add book'.toUpperCase()}
          className={styles.submit}
        />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmitForm: bookObject => dispatch(CREATE_BOOK(bookObject)),
});

BooksForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);

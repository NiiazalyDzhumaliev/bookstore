import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions';

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
    <form id="form" onChange={handleChange} onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input type="text" id="title" name="title" />
      </label>
      <br />
      <label htmlFor="categories">
        Choose a category
        <select
          id="categories"
          name="category"
          value={state.category}
          onChange={handleChange}
        >
          {categories.map(category => (
            <option value={category} key={UuidV4()}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  onSubmitForm: bookObject => dispatch(CREATE_BOOK(bookObject)),
});

BooksForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);

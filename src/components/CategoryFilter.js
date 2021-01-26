import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CHANGE_FILTER } from '../actions';

const { v4: UuidV4 } = require('uuid');

const CategoryFilter = props => {
  const { onChangeFilter } = props;
  const [state, setState] = useState({
    category: '',
  });

  const handleChange = event => {
    const {
      target: { name, value },
    } = event;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    onChangeFilter(state.category);
  });

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
    <tr>
      <td>
        <label htmlFor="filter-categories">
          Choose a category
          <select
            id="filter-categories"
            name="category"
            value={state.category}
            onChange={handleChange}
          >
            <option value="" key={UuidV4()}>
              All
            </option>
            {categories.map(category => (
              <option value={category} key={UuidV4()}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  onChangeFilter: bookCategory => dispatch(CHANGE_FILTER(bookCategory)),
});

CategoryFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CategoryFilter);

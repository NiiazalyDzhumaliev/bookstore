import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CHANGE_FILTER } from '../actions';
import styles from './CategoryFilter.module.css';

const { v4: UuidV4 } = require('uuid');

const CategoryFilter = props => {
  const { onChangeFilter, filter } = props;

  const handleFilterChange = event => {
    const {
      target: { value },
    } = event;
    onChangeFilter(value);
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
    <select
      id="filter-categories"
      className={styles.category_select}
      name="category"
      onChange={handleFilterChange}
      value={filter}
    >
      <option value="" key={UuidV4()}>
        {'categories'.toUpperCase()}
      </option>
      {categories.map(category => (
        <option value={category} key={UuidV4()}>
          {category}
        </option>
      ))}
    </select>
  );
};

const mapStateToProps = state => ({
  filter: state.filt.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: bookCategory => dispatch(CHANGE_FILTER(bookCategory)),
});

CategoryFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);

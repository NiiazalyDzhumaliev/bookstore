import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const { v4: UuidV4 } = require('uuid');

const CategoryFilter = props => {
  const { handleFilterChange, filter } = props;

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
            onChange={handleFilterChange}
            value={filter}
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

const mapStateToProps = state => ({
  filter: state.filt.filter,
});

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(CategoryFilter);

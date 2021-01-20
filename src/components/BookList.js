import { connect } from 'react-redux';

const BookList = () => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);

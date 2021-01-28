import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;

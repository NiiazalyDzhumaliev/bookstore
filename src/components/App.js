import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.panel_main}>
        <BookList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;

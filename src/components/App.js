import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.panel_main}>
        <Header />
        <BookList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;

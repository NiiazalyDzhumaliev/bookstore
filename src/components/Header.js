import { ReactComponent as Logo } from '../icons/user.svg';
import styles from './Header.module.css';
import CategoryFilter from './CategoryFilter';

const Header = () => (
  <div className={styles.header_container}>
    <div className={styles.bookstore_container}>
      <span className={styles.bookstore}>BookStore CMS</span>
      <span className={styles.books}>{'Books'.toUpperCase()}</span>
      <CategoryFilter />
    </div>
    <div>
      <Logo fill="#0290ff" className={styles.user} />
    </div>
  </div>
);

export default Header;

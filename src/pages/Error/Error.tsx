import { Link } from "react-router-dom";
import errorImage from "../../assets/Errors/404.png";
import styles from "./styles.module.css";

export function Error() {
  return (
    <div className={styles.error}>
      <img className={styles.errorImage} src={errorImage} alt="pageNotFound" />
      <h4 className={styles.errorText}>Sorry, page not found...</h4>
      <button className={styles.errorBtn}>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

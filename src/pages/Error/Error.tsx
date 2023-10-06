import errorImage from "../../assets/Errors/404.png";
import styles from "./Error.module.css";

export function Error() {
  return (
    <div className={styles.error}>
      <img className={styles.errorImage} src={errorImage} alt="pageNotFound" />
      <h4 className={styles.errorText}>Sorry, page not found...</h4>
    </div>
  );
}

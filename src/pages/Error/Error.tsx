import errorImage from "../../assets/Errors/404.png";
import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();
  const toHomePage = () => navigate('/home')

  return (
    <div className={styles.error}>
      <img className={styles.errorImage} src={errorImage} alt="pageNotFound" />
      <h4 className={styles.errorText}>Sorry, page not found...</h4>
      <button onClick={toHomePage} className={styles.btnHome}>To home page</button>
    </div>
  );
}

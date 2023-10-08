import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

interface IHeader {
  style: string;
}

export function Header({ style }: IHeader) {
  return (
    <div className={`${style} ${styles.header}`}>
      <nav className={styles.header_navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/weather">Weather</NavLink>
        <NavLink to="/error">Error</NavLink>
      </nav>
    </div>
  );
}

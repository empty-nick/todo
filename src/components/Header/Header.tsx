import styles from "./styles.module.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal.tsx";
import { NavLink } from "react-router-dom";

// interface IHeader{
// 	style: string;
// }
// export function Header({style}: IHeader) {
// 	const [visible, setVisible] = useState(false)
// 	const toggleModal = () => {
// 		setVisible(true)
// 		console.log(visible)
// 	}
// 	return (
// 		<div className={`${style} ${styles.header}`}>
// 			Header
// 			<button onClick={toggleModal}>Open</button>
// 			<Modal isVisible={visible} setVisible={setVisible} />
// 		</div>
// 	)
export function Header() {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(true);
    console.log(visible);
  };
  return (
    <div className={styles.header}>
      <nav className={styles.header_navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/error">Error</NavLink>
      </nav>
      <button onClick={toggleModal}>Open</button>
      <Modal isVisible={visible} setVisible={setVisible} />
    </div>
  );
}

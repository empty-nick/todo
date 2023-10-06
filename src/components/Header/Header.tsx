import styles from './styles.module.css'
import { useState } from "react";
import { Modal } from "../Modal/Modal.tsx";

export function Header() {
	const [visible, setVisible] = useState(false)
	const toggleModal = () => {
		setVisible(true)
		console.log(visible)
	}
	return (
		<div className={styles.header}>
			Header
			<button onClick={toggleModal}>Open</button>
			<Modal isVisible={visible} setVisible={setVisible} />
		</div>
	)
}

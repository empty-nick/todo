import React, { ReactElement } from "react";
import styles from './styles.module.css'

interface IModal{
	isVisible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Modal({isVisible, setVisible}: IModal): ReactElement {
	const toggleModal = () => {
	  setVisible(prevState => !prevState)
	}
	return (
		<>
			{isVisible && (
				<div className={styles.modal__background} onClick={toggleModal}>
					<div className={styles.modal__window}>
						Content
					</div>
				</div>
			)}
		</>
	)
}

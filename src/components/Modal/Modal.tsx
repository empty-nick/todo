import { ReactElement, useState } from "react";
import styles from './styles.module.css'

export function Modal(): ReactElement {
	const [modal, setModal] = useState(false)

	return (
		<>
			{modal && (
				<div className={styles.modal__background} onClick={() => setModal(prevState => !prevState)}>
					<div className={styles.modal__window}>
						Content
					</div>
				</div>
			)}
		</>
	)
}

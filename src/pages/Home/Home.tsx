import { Modal } from "../../components/Modal/Modal.tsx";
import { useState } from "react";

export function Home() {
	const [visible, setVisible] = useState(false)
	const toggleModal = () => {
		setVisible(true)
		console.log(visible)
	}
	return (
		<div>
			<Modal isVisible={visible} setVisible={setVisible} />
			<button onClick={toggleModal}>Toggle</button>
		</div>
	)
}

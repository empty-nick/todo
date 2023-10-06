import { Header } from "../../components/Header/Header.tsx";
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
			<Header />
			<button onClick={toggleModal}>Toggle</button>
		</div>
	)
}

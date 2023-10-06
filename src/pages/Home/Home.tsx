import { Modal } from '../../components/Modal/Modal.tsx';
import { useState } from 'react';
import { Task } from '../../components/Task/Task';

export function Home() {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(true);
    console.log(visible);
  };
  return (
    <>
      <div>
        <Modal isVisible={visible} setVisible={setVisible} />
        <button onClick={toggleModal}>Toggle</button>
        <Task />
      </div>
    </>
  );
}

import React, { useState } from 'react';
import styles from './styles.module.css';

export function NewTaskForm() {
  const [message, setMessage] = useState<string>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(message);
        /////// TODO:
        // if (message?.trim().length) {
        //   return <Task taskMessage={message?.trim()} />;
        // } else {
        //   return null;
        // }
      }}
    >
      <input type='text' placeholder='Enter task' onChange={handleChange} />
      <button type='submit' className={styles.submitBtn}>
        {' '}
        Add new task
      </button>
    </form>
  );
}

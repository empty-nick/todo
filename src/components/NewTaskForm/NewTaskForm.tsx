import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { ITask } from "../Task/Task.tsx";

interface INewTask {
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
}
export function NewTaskForm({ setTask }: INewTask) {
  const [message, setMessage] = useState<string>('');
  const [isInputValueCorrect, setInputValueCorrect] = useState<boolean>(true)
  useEffect(() => {
    if (message.length > 0 && message.trim().length === 0)
      setInputValueCorrect(false)
    if (message.trim().length > 0 || message.length === 0)
      setInputValueCorrect(true)
  }, [message])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value)
      setMessage(e.target.value);
  };
  const handleBlurEvent = () => {
    setInputValueCorrect(true)
    if (message?.trim().length === 0)
      setMessage('')
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim().length > 0 && isInputValueCorrect) {
      setTask(prevValue => [...prevValue, { taskMessage: message.trim(), isCompleted: false }])
      setMessage('')
    } else if (!isInputValueCorrect){
      setInputValueCorrect(false)
    }
    console.log(message);
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Enter task'
        value={message}
        onChange={handleChange}
        onBlur={handleBlurEvent}
        className={`${styles.inputSuccess} ${!isInputValueCorrect && styles.inputError}`}
      />
      <button type='submit' className={styles.submitBtn}>
        {' '}
        Add new task
      </button>
    </form>
  );
}

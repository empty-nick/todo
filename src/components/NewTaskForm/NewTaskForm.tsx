import React, { ReactElement, useEffect, useState } from 'react';
import { actions } from "../../store/task/task.slice.ts";
import { useDispatch } from "react-redux";

import styles from './styles.module.css';

export function NewTaskForm(): ReactElement {
  const [message, setMessage] = useState<string>('');
  const [isInputValueCorrect, setInputValueCorrect] = useState<boolean>(true)
  const [id, setId] = useState<number>(0)
  // TODO ВАЖНО!!! Тут используем dispatch, но возможно иначе (см. другой TODO)
  const dispatch = useDispatch()
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
      setId(prevState => ++prevState)
      dispatch(actions.addTask({isCompleted: false, taskMessage: message, id: id}))
      setMessage('')
    } else if (!isInputValueCorrect){
      setInputValueCorrect(false)
    }
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

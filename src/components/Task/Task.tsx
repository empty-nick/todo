import React, { useId, useState } from "react";

import editIcon from '../../assets/edit_icon.png';
import deleteIcon from '../../assets/delete_icon.png';

import styles from './styles.module.css';

export interface ITask {
  taskMessage: string;
  isCompleted: boolean
}
export function Task({taskMessage = '', isCompleted}: ITask) {
  const [enableEditLabel, setEnableEditLabel] = useState<boolean>(true)
  const [message, setMessage] = useState<string>(taskMessage)
  /*
    Элемент будет дублироваться и получится, что id совпадают у разых заданек.
    useId() нужен, чтобы генерировать специальный id для каждого компонента
    Глянь, если хочешь, через консоль разраба в браузере
   */
  const id = useId()

  // TODO пофикисить возможность изменить заданьку на пустую строку
  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e?.target?.value)
    console.log(message)
  }

  return (
    <div>
      <ul role='list' className={styles.list}>
        <li className={styles.todo}>
          <div className={styles.task}>
            <input id={id} type='checkbox' defaultChecked={isCompleted} />
            {enableEditLabel ? (
              <label className='todo-label' htmlFor={id}>
                {message.trim() ?? `Default message`}
              </label>
            ) : (
              <input
                type='text'
                className={styles.inputMessage}
                value={message}
                onInput={changeMessage}
                onBlur={() => setEnableEditLabel(prevState => !prevState)}
              />
            )}
            <div className={styles.btnsGroup}>
              <button type='button' className={styles.btnEdit} onClick={() => setEnableEditLabel(prevState => !prevState)}>
                <img src={editIcon} className={styles.imgEdit} alt='' />
              </button>
              <button type='button' className={styles.btnDelete}>
                <img src={deleteIcon} className={styles.imgDelete} alt='' />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

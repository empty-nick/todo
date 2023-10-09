import React, { useId, useState } from "react";
import { ITask } from "../../models/models.ts";
import { useActions } from "../../hooks/useActions.ts";

import editIcon from '../../assets/edit_icon.png';
import deleteIcon from '../../assets/delete_icon.png';

import styles from './styles.module.css';

export function Task({taskMessage, isCompleted, id}: ITask) {
  const [enableEditLabel, setEnableEditLabel] = useState<boolean>(true)
  const [message, setMessage] = useState<string>(taskMessage)
  const [checkbox, setCheckbox] = useState<boolean>(!isCompleted)
  /*
    Элемент будет дублироваться и получится, что id совпадают у разых заданек.
    useId() нужен, чтобы генерировать специальный id для каждого компонента
    Глянь, если хочешь, через консоль разраба в браузере
   */
  const idElem = useId()
  // TODO ВАЖНО!!! Тут используем кастомный хук, который позволяет достать ВСЕ методы
  const { editTask, removeTask } = useActions()

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length !== 0)
      setMessage(e?.target?.value)
  }
  const changeCheckboxState = () => {
    setCheckbox(prevState => !prevState)
    editTask({id, taskMessage: message, isCompleted: checkbox})
  }
  const handleBlur = () => {
    editTask({id, isCompleted, taskMessage: message})
    setEnableEditLabel(prevState => !prevState)
  }
  const handleRemove = () => {
    removeTask(id)
  }

  return (
    <div>
      <ul role='list' className={styles.list}>
        <li className={styles.todo}>
          <div className={styles.task}>
            <input id={idElem} type='checkbox' defaultChecked={!checkbox} onInput={changeCheckboxState} />
            {enableEditLabel ? (
              <label className='todo-label' htmlFor={idElem}>
                {message.trim() ?? `Default message`}
              </label>
            ) : (
              <input
                type='text'
                className={styles.inputMessage}
                value={message}
                onInput={changeMessage}
                onBlur={handleBlur}
              />
            )}
            <div className={styles.btnsGroup}>
              <button type='button' className={styles.btnEdit} onClick={() => setEnableEditLabel(prevState => !prevState)}>
                <img src={editIcon} className={styles.imgEdit} alt='' />
              </button>
              <button type='button' className={styles.btnDelete} onClick={handleRemove}>
                <img src={deleteIcon} className={styles.imgDelete} alt='' />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

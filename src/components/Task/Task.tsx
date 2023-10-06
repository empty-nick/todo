import editIcon from '../../assets/edit_icon.png';
import deleteIcon from '../../assets/delete_icon.png';
import styles from './task.module.css';

export function Task() {
  return (
    <>
      <h1>To do list</h1>
      <ul role='list' className={styles.list}>
        <li className={styles.todo}>
          <div className={styles.task}>
            <input id='todo-0' type='checkbox' defaultChecked={false} />
            <label className='todo-label' htmlFor='todo-0'>
              First task
            </label>
            <div className={styles.btnsGroup}>
              <button type='button' className={styles.btnEdit}>
                <img src={editIcon} className={styles.imgEdit} alt='' />
              </button>
              <button type='button' className={styles.btnDelete}>
                <img src={deleteIcon} className={styles.imgDelete} alt='' />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

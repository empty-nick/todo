import { useAppSelector } from "../../hooks/useAppSelector.ts";

import { Task } from '../../components/Task/Task';
import { NewTaskForm } from '../../components/NewTaskForm/NewTaskForm.tsx';
import { Console } from '../../components/Console/Console.tsx';

import styles from './styles.module.css';

export function Home() {
  const { tasks } = useAppSelector( state => state.task )

  return (
    <div className={styles.content}>
      <div className={styles.tasks}>
        <h1>To do list</h1>
        <NewTaskForm />
        {tasks.length !== 0 && tasks.map( task => (
          <Task
            id={task.id}
            taskMessage={task.taskMessage}
            isCompleted={task.isCompleted}
            key={task.id}
          />
        ))}
      </div>
      <div className={styles.completed}>
        {/* TODO Тут будут completed tasks */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
        dolorem?
      </div>
      <div className={styles.console}>
        {/* TODO Хочу добавить эту штуку, чтобы выводить какую-то инфу, по типу console.log(), только сразу на экран */}
        <Console />
      </div>
    </div>
  );
}

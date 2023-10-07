import { Task } from '../../components/Task/Task';

import styles from './styles.module.css';
import { Console } from "../../components/Console/Console.tsx";

export function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.tasks}>
        <h1>To do list</h1>
        <Task taskMessage={'Add new column'} />
        <Task taskMessage={'New message'} />
        <Task taskMessage={'Ca'} />
        <Task taskMessage={'Cvfdvfd'} />
      </div>
      <div className={styles.completed}>
        {/* TODO Тут будут completed tasks */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolorem?
      </div>
      <div className={styles.console}>
        { /* TODO Хочу добавить эту штуку, чтобы выводить какую-то инфу, по типу console.log(), только сразу на экран */ }
        <Console />
      </div>
    </div>
  );
}

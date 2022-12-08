import { task } from "../../types/task";
import style from "./List.module.scss";
import Task from "./Task";

function List({ tasks }: { tasks: task[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas do dia</h2>
      <ul>
        {tasks.map((task, index) => {
          return <Task {...task} key={index} />;
        })}
      </ul>
    </aside>
  );
}

export default List;

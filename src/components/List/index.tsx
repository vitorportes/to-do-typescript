import { task } from "../../types/task";
import style from "./List.module.scss";
import Task from "./Task";

interface Props {
  tasks: task[];
  selectTask: (selectedTask: task) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas do dia</h2>
      <ul>
        {tasks.map((task) => {
          return <Task {...task} key={task.id} selectTask={selectTask} />;
        })}
      </ul>
    </aside>
  );
}

export default List;

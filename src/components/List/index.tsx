import { useState } from "react";
import style from "./List.module.scss";
import Task from "./Task";

function List() {
  const [tasks, setTasks] = useState([]);
  const lista = [
    {
      title: "React",
      time: "01:00:00",
    },
    {
      title: "Javascript",
      time: "02:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas do dia</h2>
      <ul>
        {lista.map((task, index) => {
          return <Task {...task} key={index} />;
        })}
      </ul>
    </aside>
  );
}

export default List;

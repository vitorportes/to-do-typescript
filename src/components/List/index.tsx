import { useState } from "react";
import "./style.scss";

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
    <aside className='listaTarefas'>
      <h2>Tarefas do dia</h2>
      <ul>
        {lista.map((task, index) => {
          return (
            <div className='item' key={index}>
              <h3>{task.title}</h3>
              <span>{task.time}</span>
            </div>
          );
        })}
      </ul>
    </aside>
  );
}

export default List;

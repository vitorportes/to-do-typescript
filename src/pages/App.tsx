import Forms from "../components/Forms";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss";
import { useState } from "react";
import { task } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<task[]>([]);
  const [selected, setSelected] = useState<task>();

  function selectTask(selectedTask: task) {
    setSelected(selectedTask);
    setTasks((prevState) =>
      prevState.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((prevState) =>
        prevState.map((task) => {
          if (selected.id === task.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} endTask={endTask} />
    </div>
  );
}

export default App;

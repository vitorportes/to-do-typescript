import Forms from "../components/Forms";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss";
import { useState } from "react";
import { task } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<task[]>([]);

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;

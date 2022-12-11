import { task } from "../../../types/task";
import style from "./Task.module.scss";

interface props extends task {
  selectTask: (selectedTask: task) => void;
}

function Task({ title, time, selected, completed, id, selectTask }: props) {
  return (
    <div
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        completed && style.itemCompletado
      }`}
      onClick={() => selectTask({ title, time, selected, completed, id })}
    >
      <h3>{title}</h3>
      <span>{time}</span>
    </div>
  );
}

export default Task;

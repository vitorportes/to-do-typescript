import style from "./Task.module.scss";

function Task({ title, time }: { title: string; time: string }) {
  return (
    <div className={style.item}>
      <h3>{title}</h3>
      <span>{time}</span>
    </div>
  );
}

export default Task;

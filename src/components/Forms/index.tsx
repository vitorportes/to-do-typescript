import React, { useState } from "react";
import { task } from "../../types/task";
import Button from "../Button";
import style from "./Forms.module.scss";
import { v4 } from "uuid";

function Forms({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<task[]>>;
}) {
  const [tarefa, setTarefa] = useState({
    title: "",
    time: "00:00:00",
  });

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...tarefa,
        selected: false,
        completed: false,
        id: v4(),
      },
    ]);
    setTarefa({
      title: "",
      time: "00:00:00",
    });
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor='task'>Adicione uma nova tarefa:</label>
        <input
          type='text'
          name='task'
          id='task'
          placeholder='O que você quer fazer?'
          required
          value={tarefa.title}
          onChange={(e) => {
            setTarefa({ ...tarefa, title: e.target.value });
          }}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='time'>Tempo:</label>
        <input
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='23:59:59'
          required
          value={tarefa.time}
          onChange={(e) => {
            setTarefa({ ...tarefa, time: e.target.value });
          }}
        />
      </div>
      <Button text='Adicionar' type='submit' />
    </form>
  );
}

export default Forms;

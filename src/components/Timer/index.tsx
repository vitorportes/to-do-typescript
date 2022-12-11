import Button from "../Button";
import Watch from "./Watch";
import style from "./Timer.module.scss";
import { task } from "../../types/task";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface Props {
  selected: task | undefined;
  endTask: () => void;
}

function Timer({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    selected?.time && setTime(timeToSeconds(selected.time));
  }, [selected]);

  function regressiveCount(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressiveCount(counter - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha uma tarefa e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button text='Começar' onClick={() => regressiveCount(time)} />
    </div>
  );
}

export default Timer;

import Button from "../Button";
import Watch from "./Watch";
import style from "./Timer.module.scss";

function Timer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha uma tarefa e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button text='Começar' />
    </div>
  );
}

export default Timer;

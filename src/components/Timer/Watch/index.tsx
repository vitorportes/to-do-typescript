import { secondsToMinutesAndSeconds } from "../../../common/utils/time";
import style from "./Watch.module.scss";

interface Props {
  time: number | undefined;
}

function Watch({ time = 0 }: Props) {
  const [minutes, seconds] = secondsToMinutesAndSeconds(time);
  const [minutesFirst, minutesSecond] = String(minutes).padStart(2, "0");
  const [secondsFirst, secondsSecond] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minutesFirst}</span>
      <span className={style.relogioNumero}>{minutesSecond}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsFirst}</span>
      <span className={style.relogioNumero}>{secondsSecond}</span>
    </>
  );
}

export default Watch;

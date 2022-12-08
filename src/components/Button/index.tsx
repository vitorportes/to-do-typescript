import style from "./Button.module.scss";

function Button(props: { text: string }) {
  return <button className={style.botao}>{props.text}</button>;
}

export default Button;

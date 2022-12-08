import style from "./Button.module.scss";

function Button(props: {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  const { type = "button", text } = props;
  return (
    <button type={type} className={style.botao}>
      {text}
    </button>
  );
}

export default Button;

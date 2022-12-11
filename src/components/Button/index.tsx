import style from "./Button.module.scss";

function Button(props: {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}) {
  const { type = "button", text, onClick } = props;
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

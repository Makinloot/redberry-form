import './Button.scss';

const Button: React.FC<{text: string, btntype: string, submit?: "submit"}> = ({ text, btntype, submit }): JSX.Element => {
  return (
    <button className={btntype} type={submit || "button"}>{text}</button>
  )
}

export default Button
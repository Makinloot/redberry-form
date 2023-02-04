import './Button.scss';

const Button: React.FC<{text: string, btntype: string}> = ({ text, btntype }): JSX.Element => {
  return (
    <button className={btntype}>{text}</button>
  )
}

export default Button
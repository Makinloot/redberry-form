import "./Button.scss";

const Button: React.FC<{
  text: string;
  btntype: string;
  submit?: "submit";
  setShow?: React.Dispatch<React.SetStateAction<string[]>>;
  show?: string[];
}> = ({ text, btntype, submit, setShow, show }): JSX.Element => {
  if(btntype === 'btn-red' || btntype === 'btn-blue') {
    return (
      <button 
        className={btntype} 
        type={submit || "button"}
      >
        {text}
      </button>
    );
  }
  
  return (
    <button 
      className={btntype} 
      type={submit || "button"}
      onClick={() => {
        if(setShow !== undefined && show) {
          setShow(show)
          localStorage.setItem('aboutForm', show[0])
          localStorage.setItem('experienceForm', show[1])
          localStorage.setItem('educationForm', show[2])
          localStorage.setItem('resumeForm', show[3])
          localStorage.setItem('resultForm', show[4])
        } else {
          localStorage.clear();
          console.log('red')
        }
      }}  
    >
      {text}
    </button>
  );
};

export default Button;

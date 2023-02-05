import Button from "../button/Button";

import "./Input.scss";

interface InputProps {
  label: string;
  placeholder?: string;
  validation?: string;
  id: string;
  type: string;
  required: boolean;
  pattern?: string;
  minLength?: number;
  errorIcon?: string;
  successIcon?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  validation,
  id,
  type,
  required,
  pattern,
  minLength,
  errorIcon,
  successIcon
}) => {
  if (type === "textarea") {
    return (
      <div className="Input-field flex-col">
        <label htmlFor={id}>{label}</label>
        <textarea 
          id={id} 
          cols={30} 
          rows={8} 
          placeholder={placeholder}
          required={required}
          />
        <span>{validation}</span>
      </div>
    );
  }

  if(type === "file") {
    return (
      <div className="Input-field flex-row">
        <label htmlFor={id}>{label}</label>
        <input 
          type={type} 
          placeholder={placeholder} 
          id={id}
          required={required}
        />
        <Button 
          text="ატვირთვა"
          btntype="btn-file"
        />
        <img className="error-icon" src={errorIcon} alt="error icon" />
        <img className="success-icon" src={successIcon} alt="success icon" />
      </div>
    );
  }

  return (
    <div className="Input-field flex-col">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        id={id}
        required={required}
        pattern={pattern}
        minLength={minLength}
      />
      <span>{validation}</span>
      <img className="error-icon" src={errorIcon} alt="error icon" />
      <img className="success-icon" src={successIcon} alt="success icon" />
    </div>
  );
};

export default Input;

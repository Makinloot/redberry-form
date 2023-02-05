import Button from "../button/Button";
import { InputProps } from "../../data";

import "./Input.scss";

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
  successIcon,
  handleChange,
  handleFile,
  value,
  ...othr
  // value,
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
          onChange={handleChange}
          {...othr}
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
          onChange={handleFile}
          // {...othr}
          // name={value}
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
        onChange={handleChange}
        {...othr}
      />
      <span>{validation}</span>
      <img className="error-icon" src={errorIcon} alt="error icon" />
      <img className="success-icon" src={successIcon} alt="success icon" />
    </div>
  );
};

export default Input;

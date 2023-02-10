import { useState, useRef, useEffect } from "react";

import Button from "../button/Button";
import { InputProps } from "../../data";

import arrowDown from "../../assets/vector-down.png";

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
  inputVal,
  degrees,
  ...othr
}) => {

  const [openDegrees, setOpenDegrees] = useState<boolean>(false)
  const degreeRef = useRef<HTMLDivElement>(null);
  const degreeInnerRef = useRef<HTMLDivElement>(null);

  // close burger menu if clicked outside burger
  useEffect(() => {
    const handleClass = (e: MouseEvent): void => {
      if (degreeRef.current && !degreeRef.current.contains(e.target as HTMLDivElement)) setOpenDegrees(false)
    };

    document.addEventListener("mousedown", handleClass);
    return () => document.removeEventListener("mousedown", handleClass);
  }, []);

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
          value={inputVal}
          {...othr}
        />
        <span>{validation}</span>
      </div>
    );
  }

  if (type === "file") {
    return (
      <div className="Input-field flex-row">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          required={required}
          onChange={handleFile}
        />
        <Button text="ატვირთვა" btntype="btn-file" />
        <img className="error-icon" src={errorIcon} alt="error icon" />
        <img className="success-icon" src={successIcon} alt="success icon" />
      </div>
    );
  }

  if (degrees && (id === "degree-input" || id === "degreeAddit-input")) {

    // select degrees and put its value to degree input
    const handleSelectedValues = (degree: {
      title: string;
    }) => {
      const input = document.getElementById('degree-input') as HTMLInputElement;
      input.value = degree.title
      if(id === "degree-input") {
        localStorage.setItem('degree', degree.title);
        window.location.reload()
      } else {
        localStorage.setItem('degreeAddit', degree.title);
        window.location.reload()
      }
    }

    return (
      <div ref={degreeRef} className="Input-field flex-col">
        <label htmlFor={id}>{label}</label>
        <div className="input-container">
          <input
            className="degree-input"
            type={type}
            placeholder={placeholder}
            id={id}
            required={required}
            pattern={pattern}
            minLength={minLength}
            onChange={handleChange}
            value={inputVal}
            {...othr}
            autoComplete="off"
            onClick={() => setOpenDegrees(!openDegrees)}
          />
          <img className="arrow-down" src={arrowDown} />
        </div>
        <span>{validation}</span>
        <div ref={degreeInnerRef} className={openDegrees ? "degrees-options flex-col" : "degrees-options flex-col hidden"}>
          {degrees.map((degree) => {
            return (
              <div
                className="degree-option"
                key={degree.id}
                onClick={() => handleSelectedValues(degree)}
              >
                {degree.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="Input-field flex-col">
      <label htmlFor={id}>{label}</label>
      <div className="input-container">
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          required={required}
          pattern={pattern}
          minLength={minLength}
          onChange={handleChange}
          value={inputVal}
          {...othr}
        />
        <img className="error-icon" src={errorIcon} alt="error icon" />
        <img className="success-icon" src={successIcon} alt="success icon" />
      </div>
      <span>{validation}</span>
    </div>
  );
};

export default Input;

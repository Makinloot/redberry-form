import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

import { eduInputFields } from "../../data";

const Education = () => {

  const [values, setValues] = useState<any>({
    education: "",
    degree: "",
    educationEnd: "",
    educationText: "",
  });
  const handleChange = (e: {
    target: {
      name: string;
      value: string;
    };
  }) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    localStorage.setItem(e.target.name, e.target.value);
  };

  useEffect(() => {
    const locValues = {
      education: localStorage.getItem('education') || '',
      degree: localStorage.getItem('degree') || '',
      educationEnd: localStorage.getItem('educationEnd') || '',
      educationText: localStorage.getItem('educationText') || '',
    }
    setValues(locValues)
  }, []);

  return (
    <div className="Form">
      <div className="container">
        <div className="Form-wrapper">
          <div className="Form-primary container-small">
            <Header title="განათლება" position="3/3" />
            <div className="Form-input-field-wrapper">
              {eduInputFields.map(input => (
                <Input 
                  key={input.id}
                  {...input}
                  handleChange={handleChange}
                  value={values[input.name]}
                  inputVal={values[input.name]}
                />
              )).slice(0, 1)}
              <div className="two-inputs-grouped">
                {eduInputFields.map(input => (
                  <Input 
                    key={input.id}
                    {...input}
                    handleChange={handleChange}
                    value={values[input.name]}
                    inputVal={values[input.name]}
                  />
                )).slice(1, 3)}
              </div>
              {eduInputFields.map(input => (
                <div key={input.id}>
                  <Input 
                    {...input}
                    handleChange={handleChange}
                    value={values[input.name]}
                    inputVal={values[input.name]}
                  />
                  <hr />
                </div>
                )).slice(-1)}
            </div>
            <Button 
              text="მეტი გამოცდილების დამატება"
              btntype="btn-blue"
            />
            <div className="next-prev flex-row">
              <Link to="/experience">
                <Button text="უკან" btntype="btn-purple" />
              </Link>
              <Link to="/">
                <Button text="დასრულება" btntype="btn-purple" />
              </Link>
            </div>
          </div>
          <div className="Form-result"></div>
        </div>
      </div>
    </div>
  );
};

export default Education;

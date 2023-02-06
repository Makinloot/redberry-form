import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import "./Experience.scss";
import "../about/About.scss";

import { expInputFields } from "../../data";

interface ValueTypes {
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
  positionText: string;
}

const Experience = () => {
  const [fileInput, setFileInput] = useState();
  const [values, setValues] = useState<ValueTypes | any>({
    position: "",
    employer: "",
    startDate: "",
    endDate: "",
    positionText: "",
  });
  const handleChange = (e: {
    target: {
      name: string;
      value: string;
    };
  }) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="Form">
      <div className="container">
        <div className="Form-wrapper">
          <div className="Form-primary container-small">
            <Header title="გამოცდილება" position="2/3" />
            <div className="Form-input-field-wrapper">
              {expInputFields
                .map((input) => (
                  <Input
                    key={input.id}
                    {...input}
                    handleChange={handleChange}
                    value={values[input.name]}
                  />
                ))
                .slice(0, 2)
              }
              <div className="two-inputs-grouped">
                {expInputFields.map(input => (
                  <Input 
                    key={input.id}
                    {...input}
                    handleChange={handleChange}
                    value={values[input.name]}
                  />
                )).slice(2,4)}
              </div>
              {expInputFields.map(input => (
                <>
                  <Input 
                    key={input.id}
                    {...input}
                    handleChange={handleChange}
                    value={values[input.name]}
                  />
                  <hr />
                </>
              )).slice(-1)}
            </div>
            <Button 
              text="მეტი გამოცდილების დამატება"
              btntype="btn-blue"
            />
            <div className="next-prev flex-row">
              <Link to="/about">
                <Button 
                  text="უკან"
                  btntype="btn-purple"
                />
              </Link>
              <Link to="/education">
                <Button 
                  text="შემდეგი"
                  btntype="btn-purple"
                />
              </Link>
            </div>
          </div>
          <div className="Form-result"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

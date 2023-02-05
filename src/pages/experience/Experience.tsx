import { useState } from "react";

import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import "./Experience.scss";
import "../about/About.scss";

import { expInputFields } from "../../data";

const Experience = () => {
  const [fileInput, setFileInput] = useState();
  const [values, setValues] = useState({
    position: "",
    employer: "",
    startDate: "",
    endDate: "",
    positionText: "",
    // email: "",
    // number: "",
  });
  const handleChange = (e: {
    target: {
      name: string;
      value: string;
    };
  }) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="About">
      <div className="container">
        <div className="About-wrapper">
          <div className="About-primary container-small">
            <Header title="გამოცდილება" position="2/3" />
            <div className="About-input-field-wrapper">
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
              <div className="name-lastname">
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
              <Button 
                text="უკან"
                btntype="btn-purple"
              />
              <Button 
                text="შემდეგი"
                btntype="btn-purple"
              />
            </div>
          </div>
          <div className="About-result"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

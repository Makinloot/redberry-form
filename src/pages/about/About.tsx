import { useState } from "react";
import { Link } from "react-router-dom";

// components
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

// data & types
import { inputFields } from "../../data";
import { ValueTypes } from "../../App";
import { handleChange } from "../../App";
import { handleUploadImg } from "../../App";

interface AboutProps {
  values: ValueTypes | any,
  fileInput: string | undefined,
  handleChange: (e: handleChange) => void,
  handleUploadImg: (e: handleUploadImg) => void,
  showFormSection: string;
  setShowFormSection: React.Dispatch<React.SetStateAction<string[]>>;
}

const About: React.FC<AboutProps> = ({values, fileInput, handleChange, handleUploadImg, showFormSection, setShowFormSection}) => {

  return (
    <div className={showFormSection === 'true' ? "Form about" : "Form hide"}>
      <div className="container">
        <div className="Form-wrapper">
          <div className="Form-primary container-small">
            <Header title="პირადი ინფო" position="1/3" />
            <div className="Form-input-field-wrapper">
              <div className="two-inputs-grouped">
                {/* only name and lastname inputs */}
                {inputFields
                  .map((input) => (
                    <Input
                      key={input.id}
                      {...input}
                      handleChange={handleChange}
                      value={values[input.name]}
                      inputVal={values[input.name]}
                    />
                  ))
                  .slice(0, 2)}
              </div>
              {/* rest of the inputs */}
              {inputFields
                .map((input) => (
                  <Input
                    key={input.id}
                    {...input}
                    handleChange={handleChange}
                    handleFile={handleUploadImg}
                    value={values[input.name]}
                    inputVal={values[input.name]}
                  />
                ))
                .slice(2)}
              <Button text="შემდეგი" btntype="btn-purple about-next-page set" setShow={setShowFormSection} show={["false", "true", "false", "true", "false"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import { inputFields } from "../../data";

import "./About.scss";

interface ValueTypes {
  name: string;
  lastname: string;
  text: string;
  email: string;
  number: string;
}

const About = () => {
  const [fileInput, setFileInput] = useState();
  const [values, setValues] = useState<ValueTypes | any>({
    name: "",
    lastname: "",
    text: "",
    email: "",
    number: "",
  });

  const handleUploadImg = (e: {
    target: {
      files: any[]
    }
  }) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (target: {
      target: any;
    }) => {
      setFileInput(target.target?.result)
    };
    fileReader.readAsDataURL(file);
  };

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
                  />
                ))
                .slice(2)}
              <Link to="/experience" className="next-page">
                <Button text="შემდეგი" btntype="btn-purple" />
              </Link>
            </div>
          </div>
          <div className="Form-result"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

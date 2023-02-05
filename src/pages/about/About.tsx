import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import { inputFields } from "../../data";

import "./About.scss";

const About = () => {
  const [fileInput, setFileInput] = useState();
  const [values, setValues] = useState({
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
    <div className="About">
      <div className="container">
        <div className="About-wrapper">
          <div className="About-primary container-small">
            <Header title="პირადი ინფო" position="1/3" />
            <div className="About-input-field-wrapper">
              <div className="name-lastname">
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
          <div className="About-result"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

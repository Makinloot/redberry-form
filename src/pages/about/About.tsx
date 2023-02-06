import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import { inputFields } from "../../data";

interface ValueTypes {
  name: string;
  lastname: string;
  text: string;
  email: string;
  number: string;
}

const About = () => {
  const [fileInput, setFileInput] = useState<string | undefined>();
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
      localStorage.setItem('file', target.target.result)
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
    localStorage.setItem(e.target.name, e.target.value);
  };

  useEffect(() => {
    const locValues = {
      name: localStorage.getItem('name') || '',
      lastname: localStorage.getItem('lastname') || '',
      text: localStorage.getItem('text') || '',
      email: localStorage.getItem('email') || '',
      number: localStorage.getItem('number') || '',
    }
    setValues(locValues)
    setFileInput(localStorage.getItem('file') || undefined)
  }, []);

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

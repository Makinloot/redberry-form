import { useState } from "react";
import { Link } from "react-router-dom";

// components
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import ExpForm from "../../components/expForm/ExpForm";

// data & types
import { expInputFields } from "../../data";
import { expInputFieldsAddit } from "../../data";
import { ValueTypes } from "../../App";
import { handleChange } from "../../App";

interface ExperienceProps {
  values: ValueTypes | any;
  handleChange: (e: handleChange) => void;
}

const Experience: React.FC<ExperienceProps> = ({ values, handleChange }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="Form">
      <div className="container">
        <div className="Form-wrapper">
          <div className="Form-primary container-small">
            <Header title="გამოცდილება" position="2/3" />
            <div className="Form-input-field-wrapper">
              <ExpForm
                inputFields={expInputFields}
                handleChange={handleChange}
                values={values}
              />
              <div className={show ? "additInput" : "additInput hide"}>
                <ExpForm
                  inputFields={expInputFieldsAddit}
                  handleChange={handleChange}
                  values={values}
                />
              </div>
            </div>
            {show ? (
              <div onClick={() => setShow(!show)}>
                <Button text="სხვა სასწავლებლის წაშლა" btntype="btn-red" />
              </div>
            ) : (
              <div onClick={() => setShow(!show)}>
                <Button text="სხვა სასწავლებლის დამატება" btntype="btn-blue" />
              </div>
            )}
            <div className="next-prev flex-row">
              <Link to="/about">
                <Button text="უკან" btntype="btn-purple" />
              </Link>
              <Link to="/education">
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

export default Experience;

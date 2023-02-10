import { useState } from "react";
import { Link } from "react-router-dom";

// components
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import EduForm from "../../components/eduForm/EduForm";

// data & types
import { eduInputFields } from "../../data";
import { eduInputFieldsAddit } from "../../data";
import { ValueTypes } from "../../App";
import { handleChange } from "../../App";

interface EducationProps {
  values: ValueTypes | any;
  handleChange: (e: handleChange) => void;
}


const Education: React.FC<EducationProps> = ({ values, handleChange }) => {
  const [show, setShow] = useState<string | null>(localStorage.getItem('additEduFields'));
  
  const handleAdditionalFields = () => {
    if(localStorage.getItem('additEduFields') === 'false') {
      localStorage.setItem('additEduFields', 'true');
      setShow('true')
    } else {
      localStorage.setItem('additEduFields', 'false');
      setShow('false')
    }
  }

  const handleRemoveAdditEdu = () => {
    localStorage.removeItem('educationAddit')
    localStorage.removeItem('degreeAddit')
    localStorage.removeItem('educationEndAddit')
    localStorage.removeItem('educationTextAddit')
    window.location.reload()
  }
  
  return (
    <div className="Form">
      <div className="container">
        <div className="Form-wrapper">
          <div className="Form-primary container-small">
            <Header title="განათლება" position="3/3" />
            <div className="Form-input-field-wrapper">
              <EduForm
                inputFields={eduInputFields}
                handleChange={handleChange}
                values={values}
              />
              {show === 'true' ?
                <div className="additInput">
                  <EduForm
                    inputFields={eduInputFieldsAddit}
                    handleChange={handleChange}
                    values={values}
                  />
                </div>
                :
                null
              }
            </div>
            {show === 'true' ? (
              <div onClick={() => {
                handleRemoveAdditEdu()
                handleAdditionalFields()
              }}>
                <Button text="სხვა სასწავლებლის წაშლა" btntype="btn-red" />
              </div>
            ) : (
              <div onClick={() => {
                handleAdditionalFields()
              }}>
                <Button text="სხვა სასწავლებლის დამატება" btntype="btn-blue" />
              </div>
            )}
            <div className="next-prev flex-row">
              <Link to="/experience">
                <Button text="უკან" btntype="btn-purple" />
              </Link>
              <a href="/finished" id="education-next-page">
                <Button text="დასრულება" btntype="btn-purple" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

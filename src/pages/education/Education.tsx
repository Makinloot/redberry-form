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
  showFormSection: string;
  setShowFormSection: React.Dispatch<React.SetStateAction<string[]>>;
}


const Education: React.FC<EducationProps> = ({ values, handleChange, showFormSection, setShowFormSection }) => {
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
    <div className={showFormSection === 'true' ? "Form" : "Form hidden"}>
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
              <Button text="უკან" btntype="btn-purple set" show={["false", "true", "false", "true", "false"]} setShow={setShowFormSection} />
              <div onClick={() => {
                if(values.fileInput === undefined) alert('გთხოვთ ხელახლა ატვირთოთ სურათი')
              }}>
                <Button submit="submit" text="დასრულება" btntype="btn-purple clear" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

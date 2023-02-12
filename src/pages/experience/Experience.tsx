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
  showFormSection: string;
  setShowFormSection: React.Dispatch<React.SetStateAction<string[]>>;
}

const Experience: React.FC<ExperienceProps> = ({ values, handleChange, showFormSection, setShowFormSection }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleRemoveAdditExp = () => {
    localStorage.removeItem('positionAddit')
    localStorage.removeItem('employerAddit')
    localStorage.removeItem('startDateAddit')
    localStorage.removeItem('endDateAddit')
    localStorage.removeItem('positionTextAddit')
    window.location.reload()
  }

  return (
    <div className={showFormSection === 'true' ? "Form" : "Form hide"}>
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
              {show ?
                <div className="additInput">
                  <ExpForm
                    inputFields={expInputFieldsAddit}
                    handleChange={handleChange}
                    values={values}
                  />
                </div>
                :
                null  
              }              
            </div>
            {show ? (
              <div onClick={() => {
                setShow(!show)
                handleRemoveAdditExp()
              }}>
                <Button text="სხვა სასწავლებლის წაშლა" btntype="btn-red" />
              </div>
            ) : (
              <div onClick={() => setShow(!show)}>
                <Button text="სხვა სასწავლებლის დამატება" btntype="btn-blue" />
              </div>
            )}
            <div className="next-prev flex-row">
              <Button text="უკან" btntype="btn-purple next-prev-form set" show={["true", "false", "false", "true", "false"]} setShow={setShowFormSection} />
              <Button text="შემდეგი" btntype="btn-purple experience-next-page set" show={["false", "false", "true", "true", "false"]} setShow={setShowFormSection} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

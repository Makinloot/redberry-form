import { useEffect, useState } from "react";
import Input from "../input/Input";

// data & types
import { ValueTypes } from "../../App";
import { handleChange } from "../../App";
import { InputProps } from "../../data";

const EduForm: React.FC<{
  inputFields: InputProps[];
  values: ValueTypes | any;
  handleChange: (e: handleChange) => void;
}> = ({ inputFields, handleChange, values }) => {
  const [degrees, setDegrees] = useState<[{
    id: number;
    title: string;
  }] | null>(null);

  // fetch degrees list
  const handleFetchDegrees = async () => {
    const res = await fetch(`https://resume.redberryinternship.ge/api/degrees`)
    const data = await res.json();
    setDegrees(data);
  }

  useEffect(() => {
    handleFetchDegrees();
  }, []);

  return (
    <>
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
        .slice(0, 1)}
      <div className="two-inputs-grouped">
        {inputFields
          .map((input) => (
            <Input
              key={input.id}
              {...input}
              handleChange={handleChange}
              value={values[input.name]}
              inputVal={values[input.name]}
              degrees={degrees}
            />
          ))
          .slice(1, 3)}
      </div>
      {inputFields
        .map((input) => (
          <div key={input.id}>
            <Input
              {...input}
              handleChange={handleChange}
              value={values[input.name]}
              inputVal={values[input.name]}
            />
            <hr />
          </div>
        ))
        .slice(-1)}
    </>
  );
};

export default EduForm;

// components
import Input from "../input/Input";

import { handleChange } from "../../App";
import { ValueTypes } from "../../App";
import { InputProps } from "../../data";

const ExpForm: React.FC<{
  handleChange: (e: handleChange) => void;
  values: ValueTypes | any;
  inputFields: InputProps[];
}> = ({ handleChange, values, inputFields }) => {
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
        .slice(0, 2)}
      <div className="two-inputs-grouped">
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
          .slice(2, 4)}
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

export default ExpForm;

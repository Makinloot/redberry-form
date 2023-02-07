import React from "react";

interface ExpProps {
  position: string;
  employer: string;
  expStartDate: string;
  expEndDate: string;
  expDescription: string;
}

const Exp: React.FC<ExpProps> = ({
  position,
  employer,
  expStartDate,
  expEndDate,
  expDescription
}) => {
  return (
    <div
      className={
        position || employer || expStartDate || expEndDate || expDescription
          ? "Resume-experience"
          : "Resume-experience hidden"
      }
    >
      <h3>გამოცდილება</h3>
      <div className="position flex-col">
        <p>
          {position && position} {employer && `, ${employer}`}
        </p>
        <span className="date">
          {expStartDate && expStartDate} {expEndDate && `- ${expEndDate}`}
        </span>
      </div>
      <p>{expDescription}</p>
      <hr />
    </div>
  );
};

export default Exp;

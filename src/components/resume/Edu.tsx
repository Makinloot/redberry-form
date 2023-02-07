
interface EduProps {
  educationPlace: string;
  degree: string;
  educationEndDate: string;
  educationDescription: string;
}

const Edu: React.FC<EduProps> = ({
  educationPlace,
  degree,
  educationEndDate,
  educationDescription
}) => {
  return (
    <div
      className={
        educationPlace || degree || educationEndDate || educationDescription
          ? "Resume-education"
          : "Resume-education hidden"
      }
    >
      <h3>განათლება</h3>
      <div className="degree flex-col">
        <p>
          {educationPlace} {degree && `, ${degree}`}
        </p>
        <span className="date">{educationEndDate}</span>
      </div>
      <p>{educationDescription}</p>
      <hr />
    </div>
  );
};

export default Edu;

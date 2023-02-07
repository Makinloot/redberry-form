import emailIcon from "../../assets/email.png";
import mobileIcon from "../../assets/mobile.png";
import resumeIcon from "../../assets/resume-logo.png";

import "./Resume.scss";

interface ResumeProps {
  name: string;
  lastName: string;
  email: string;
  mobile: string;
  aboutText: string;
  position: string;
  employer: string;
  expStartDate: string;
  expEndDate: string;
  expDescription: string;
  educationPlace: string;
  degree: string;
  educationEndDate: string;
  educationDescription: string;
  userImg: string | undefined;
}

const Resume: React.FC<ResumeProps> = ({
  name,
  lastName,
  email,
  mobile,
  aboutText,
  position,
  employer,
  expStartDate,
  expEndDate,
  expDescription,
  educationPlace,
  degree,
  educationEndDate,
  educationDescription,
  userImg
}) => {
  return (
    <>
      <div className="Resume-hero">
        <div>
          <div className={(name || lastName) ? "Resume-name" : "Resume-name hidden"}>
            <h2>{name} {lastName}</h2>
          </div>
          <div className="Resume-contact flex-col">
            <span className={email ? "flex-row" : "hidden"}>
              <img src={emailIcon} />
              {email}
            </span>
            <span className={mobile ? "flex-row" : "hidden"}>
              <img src={mobileIcon} />
              +995 {mobile}
            </span>
          </div>
          <div className={aboutText ? "Resume-about" : "Resume-about hidden"}>
            <h3>ჩემ შესახებ</h3>
            <p>
             {aboutText}
            </p>
            <img className={userImg ? "user-img" : "user-img hidden"} src={userImg} />
            <hr />
          </div>
        </div>
      </div>
      <div className={(position || employer || expStartDate || expEndDate || expDescription) ? "Resume-experience" : "Resume-experience hidden"}>
        <h3>გამოცდილება</h3>
        <div className="position flex-col">
          <p>
            {position && position} {employer && `, ${employer}`}
          </p>
          <span className="date">{expStartDate && expStartDate} {expEndDate && `- ${expEndDate}`}</span>
        </div>
        <p>
          {expDescription}
        </p>
        <hr />
      </div>
      <div className={(educationPlace || degree || educationEndDate || educationDescription) ? "Resume-education" : "Resume-education hidden"}>
        <h3>განათლება</h3>
        <div className="degree flex-col">
          <p>
            {educationPlace} {degree && `, ${degree}`}
          </p>
          <span className="date">{educationEndDate}</span>
        </div>
        <p>
          {educationDescription}
        </p>
        <hr />
      </div>
      <img style={{position: 'absolute', bottom: 44, left: 80, zIndex: 100}} src={resumeIcon} />
    </>
  );
};

export default Resume;

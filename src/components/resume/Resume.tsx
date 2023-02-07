import resumeIcon from "../../assets/resume-logo.png";

import Hero from "./Hero";
import Exp from "./Exp";
import Edu from "./Edu";

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
      <Hero 
        name={name}
        lastName={lastName}
        email={email}
        mobile={mobile}
        aboutText={aboutText}
        userImg={userImg}
      />
      <Exp 
        position={position}
        employer={employer}
        expStartDate={expStartDate}
        expEndDate={expEndDate}
        expDescription={expDescription}
      />
      <Edu 
        educationPlace={educationPlace}
        degree={degree}
        educationEndDate={educationEndDate}
        educationDescription={educationDescription}
      />
      <img style={{position: 'absolute', bottom: 44, left: 80, zIndex: 100}} src={resumeIcon} />
    </>
  );
};

export default Resume;

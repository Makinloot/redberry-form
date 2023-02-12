import Resume from "../../components/resume/Resume";

const Result = ({ data }: { data: any }) => {
  if (data) {
    const {
      about_me,
      educations,
      email,
      experiences,
      id,
      image,
      name,
      phone_number,
      surname,
    } = data;
    const { degree, description, due_date, institute } = educations[0];
    const { employer, position, start_date } = experiences[0];
    const expEnd = experiences[0].due_date;
    const expDesc = experiences[0].description;
    return (
      <Resume
        name={name}
        lastName={surname}
        email={email}
        mobile={phone_number}
        aboutText={about_me}
        userImg={image}
        position={position}
        employer={employer}
        expStartDate={start_date}
        expEndDate={expEnd}
        expDescription={expDesc}
        educationPlace={institute}
        degree={degree}
        educationEndDate={description}
        educationAddit={educations[1] && educations[1].institute}
        degreeAddit={educations[1] && educations[1].degree}
        educationEndAddit={educations[1] && educations[1].due_date}
        educationTextAddit={educations[1] && educations[1].description}
        educationDescription={educations[1] && educations[1].description}
        positionAddit={experiences[1] && experiences[1].position}
        employerAddit={experiences[1] && experiences[1].employer}
        startDateAddit={experiences[1] && experiences[1].start_date}
        endDateAddit={experiences[1] && experiences[1].due_date}
        positionTextAddit={experiences[1] && experiences[1].description}
      />
    );
  }
  return null;
};

// positionAddit,
// employerAddit,
// startDateAddit,
// endDateAddit,
// positionTextAddit,

export default Result;

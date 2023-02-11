import Resume from "../../components/resume/Resume";

const Result = ({ data }: { data: any }) => {
  console.log(data);
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
      />
    );
  }
  return null;
};

// educationAddit,
// degreeAddit,
// educationEndAddit,
// educationTextAddit,
// positionAddit,
// employerAddit,
// startDateAddit,
// endDateAddit,
// positionTextAddit,

export default Result;

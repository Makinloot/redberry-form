import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";
import Resume from "./components/resume/Resume";

import "./css/style.css";

export interface ValueTypes {
  name: string;
  lastname: string;
  text: string;
  email: string;
  number: string;
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
  positionText: string;
}

export type handleChange = {
  target: {
    name: string;
    value: string;
  };
};

export type handleUploadImg = {
  target: {
    files: any[];
  };
};

function App() {
  const [formChildren, setFormChildren] = useState<boolean>(false);
  const formRef = useRef<any>();
  const [fileInput, setFileInput] = useState<string | undefined>();
  const [values, setValues] = useState<ValueTypes | any>({
    name: "",
    lastname: "",
    text: "",
    email: "",
    number: "",
    position: "",
    employer: "",
    startDate: "",
    endDate: "",
    positionText: "",
    education: "",
    degree: "",
    educationEnd: "",
    educationText: "",
    educationAddit: "",
    degreeAddit: "",
    educationEndAddit: "",
    educationTextAddit: "",
    positionAddit: "",
    employerAddit: "",
    startDateAddit: "",
    endDateAddit: "",
    positionTextAddit: "",
  });

  // upload img with file type input
  const handleUploadImg = (e: handleUploadImg) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (target: { target: any }) => {
      setFileInput(target.target?.result);
      localStorage.setItem("file", target.target.result);
    };
    fileReader.readAsDataURL(file);
  };

  // set input value to values obj and localstorage
  const handleChange = (e: handleChange) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    localStorage.setItem(e.target.name, e.target.value);
  };

  // check if form element contains more than 1 children
  const handleFormChildren = (e: HTMLFormElement) => {
    if(e.length < 2) {
      setFormChildren(true)
    }
  }

  // retrieve localstorage values and set them to values obj
  useEffect(() => {
    const locValues = {
      name: localStorage.getItem("name") || "",
      lastname: localStorage.getItem("lastname") || "",
      text: localStorage.getItem("text") || "",
      email: localStorage.getItem("email") || "",
      number: localStorage.getItem("number") || "",
      position: localStorage.getItem("position") || "",
      employer: localStorage.getItem("employer") || "",
      startDate: localStorage.getItem("startDate") || "",
      endDate: localStorage.getItem("endDate") || "",
      positionText: localStorage.getItem("positionText") || "",
      education: localStorage.getItem("education") || "",
      degree: localStorage.getItem("degree") || "",
      educationEnd: localStorage.getItem("educationEnd") || "",
      educationText: localStorage.getItem("educationText") || "",
      // for more education
      educationAddit: localStorage.getItem("educationAddit") || "",
      degreeAddit: localStorage.getItem("degreeAddit") || "",
      educationEndAddit: localStorage.getItem("educationEndAddit") || "",
      educationTextAddit: localStorage.getItem("educationTextAddit") || "",
      // for more experience
      positionAddit: localStorage.getItem("positionAddit") || "",
      employerAddit: localStorage.getItem("employerAddit") || "",
      startDateAddit: localStorage.getItem("startDateAddit") || "",
      endDateAddit: localStorage.getItem("endDateAddit") || "",
      positionTextAddit: localStorage.getItem("positionTextAddit") || "",
    };
    setValues(locValues);
    setFileInput(localStorage.getItem("file") || undefined);
  }, []);

  useEffect(() => {
    handleFormChildren(formRef.current)
  }, [formChildren])

  return (
    <Router>
      <div className="App">
        <div className="container">
          <form action="#" ref={formRef} className="form-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/about"
                element={
                  <About
                    values={values}
                    fileInput={fileInput}
                    handleChange={handleChange}
                    handleUploadImg={handleUploadImg}
                  />
                }
              />
              <Route
                path="/experience"
                element={
                  <Experience values={values} handleChange={handleChange} />
                }
              />
              <Route
                path="/education"
                element={
                  <Education values={values} handleChange={handleChange} />
                }
              />
              <Route
                path="/finished"
              />
            </Routes>
            <div className={formChildren ? "Resume alone" : "Resume"}>
              <Resume
                name={values.name}
                lastName={values.lastname}
                email={values.email}
                mobile={values.number}
                aboutText={values.text}
                position={values.position}
                employer={values.employer}
                expStartDate={values.startDate}
                expEndDate={values.endDate}
                expDescription={values.positionText}
                educationPlace={values.education}
                degree={values.degree}
                educationEndDate={values.educationEnd}
                educationDescription={values.educationText}
                userImg={fileInput}
                educationAddit={values.educationAddit}
                degreeAddit={values.degreeAddit}
                educationEndAddit={values.educationEndAddit}
                educationTextAddit={values.educationTextAddit}
                positionAddit={values.positionAddit}
                employerAddit={values.employerAddit}
                startDateAddit={values.startDateAddit}
                endDateAddit={values.endDateAddit}
                positionTextAddit={values.positionTextAddit}
              />
            </div>
          </form>
        </div>
      </div>
    </Router>
  );
}

export default App;

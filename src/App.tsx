import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";

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
      positionTextAddit: localStorage.getItem("positionText") || "",
    };
    setValues(locValues);
    setFileInput(localStorage.getItem("file") || undefined);
  }, []);

  return (
    <Router>
      <div className="App">
        <form action="#">
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
          </Routes>
        </form>
      </div>
    </Router>
  );
}

export default App;

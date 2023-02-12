import { useState, useEffect, useRef, FormEvent } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";
import Resume from "./components/resume/Resume";
import Result from "./pages/result/Result";

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
  const [apiData, setApiData] = useState(null);
  const [formChildren, setFormChildren] = useState<boolean>(false);
  const formRef = useRef<any>();
  const [fileInput, setFileInput] = useState<any>();
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
  const [showFormSection, setShowFormSection] = useState<string[]>(
    [
      localStorage.getItem('aboutForm') || "true",
      localStorage.getItem('experienceForm') || "false",
      localStorage.getItem('educationForm') || "false",
      localStorage.getItem('resumeForm')  || "true",
      localStorage.getItem('resultForm') || "false"
    ]);

  // upload img with file type input
  const handleUploadImg = (e: handleUploadImg) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (target: { target: any }) => {
      setFileInput(file);
      localStorage.setItem("file", target.target.result);
      localStorage.setItem("fileImg", file);
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
    if (e.length < 2) {
      setFormChildren(true);
    }
  };

  // submit form
  const handleSubmitForm = (e: HTMLFormElement | any) => {
    e.preventDefault();
    
    const experiencesArr = [
      {
        position: values.position,
        employer: values.employer,
        start_date: values.startDate,
        due_date: values.endDate,
        description: values.positionText,
      },
      {
        position: values.positionAddit,
        employer: values.employerAddit,
        start_date: values.startDateAddit,
        due_date: values.endDateAddit,
        description: values.positionTextAddit
      }
    ]

    const educationsArr = [
      {       
        institute: values.education,
        degree_id: 1,
        degree: values.degree,
        due_date: values.educationEnd,
        description: values.educationText
      },
      {
        institute: values.educationAddit,
        degree_id: 2,
        degree: values.degreeAddit,
        due_date: values.educationEndAddit,
        description: values.educationTextAddit
      }
    ]

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('surname', values.lastname);
    formData.append('about_me', values.text);
    formData.append('phone_number', `+995${values.number}`);
    formData.append('email', values.email);
    formData.append('image', fileInput);

    experiencesArr.forEach((item, i) => {
      formData.append(`experiences[${[0]}][position]}`, experiencesArr[0].position.toString());
      formData.append(`experiences[${[0]}][employer]`, experiencesArr[0].employer.toString());
      formData.append(`experiences[${[0]}][start_date]`, experiencesArr[0].start_date.toString());
      formData.append(`experiences[${[0]}][due_date]`, experiencesArr[0].due_date.toString());
      formData.append(`experiences[${[0]}][description]`, experiencesArr[0].description.toString());
      if(experiencesArr[1].position) {
        formData.append(`experiences[${[1]}][position]}`, experiencesArr[1].position.toString());
        formData.append(`experiences[${[1]}][employer]`, experiencesArr[1].employer.toString());
        formData.append(`experiences[${[1]}][start_date]`, experiencesArr[1].start_date.toString());
        formData.append(`experiences[${[1]}][due_date]`, experiencesArr[1].due_date.toString());
        formData.append(`experiences[${[1]}][description]`, experiencesArr[1].description.toString());
      }
    })

    educationsArr.forEach((item, i) => {
      formData.append(`educations[${0}][institute]`, educationsArr[0].institute.toString());
      formData.append(`educations[${0}][degree]`, educationsArr[0].degree.toString());
      formData.append(`educations[${0}][degree_id]`, educationsArr[0].degree_id.toString());
      formData.append(`educations[${0}][due_date]`, educationsArr[0].due_date.toString());
      formData.append(`educations[${0}][description]`, educationsArr[0].description.toString());
      if(educationsArr[1].institute) {
        formData.append(`educations[${1}][institute]`, educationsArr[1].institute.toString());
        formData.append(`educations[${1}][degree]`, educationsArr[1].degree.toString());
        formData.append(`educations[${1}][degree_id]`, educationsArr[1].degree_id.toString());
        formData.append(`educations[${1}][due_date]`, educationsArr[1].due_date.toString());
        formData.append(`educations[${1}][description]`, educationsArr[1].description.toString());
      }
    })
    
    handlePostData(formData);
    console.log(fileInput)
  };

  const handlePostData = async (formData: FormData) => {
    const url = `https://resume.redberryinternship.ge/api/cvs`;
    axios.post(url, formData).then(res => {
      setApiData(res.data)
      setShowFormSection(["false", "false", "false", "false", "true"])
      localStorage.setItem('aboutForm', "false")
      localStorage.setItem('experienceForm', "false")
      localStorage.setItem('educationForm', "false")
      localStorage.setItem('resumeForm', "false") 
      localStorage.setItem('resultForm', "true")
      localStorage.clear()
    })
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
      positionTextAddit: localStorage.getItem("positionTextAddit") || "",
    };
    setValues(locValues);
    setFileInput(localStorage.getItem("file"));
  }, []);

  useEffect(() => {
    handleFormChildren(formRef.current);
  }, [formChildren]);

  return (
    <Router>
      <div className="App">
        <div className="container">
          <form
            action="#"
            onSubmit={handleSubmitForm}
            ref={formRef}
            className="form-container"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/about"
                element={
                  <>
                    <About
                      values={values}
                      fileInput={fileInput}
                      handleChange={handleChange}
                      handleUploadImg={handleUploadImg}
                      showFormSection={showFormSection[0]}
                      setShowFormSection={setShowFormSection}
                    />
                    <Experience 
                      values={values} 
                      handleChange={handleChange}
                      showFormSection={showFormSection[1]}
                      setShowFormSection={setShowFormSection}
                    />
                    <Education 
                      values={values} 
                      handleChange={handleChange} 
                      showFormSection={showFormSection[2]}
                      setShowFormSection={setShowFormSection}
                    />
                    <div className={showFormSection[3] === "true" ? "Resume" : "Resume hidden"}>
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
                    <div className={showFormSection[4] === "true" ? "Resume alone" : "Resume hidden"}>
                      <Result data={apiData} />
                    </div>
                  </>
                }
              />
              <Route path="/finished" element={<Result data={apiData} />} />
            </Routes>
          </form>
        </div>
      </div>
    </Router>
  );
}

export default App;

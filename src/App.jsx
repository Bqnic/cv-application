import { useState } from "react";
import Personal from "./components/Personal";
import "./app.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

export default function App() {
  const [personalValues, setPersonalValues] = useState({
    name: "",
    mail: "",
    phone: "",
    adress: "",
  });

  const [educationValues, setEducationValues] = useState({
    school: "",
    degree: "",
    startingDateEdu: "",
    endingDateEdu: "",
    locationEdu: "",
  });

  const [expValues, setExpValues] = useState({
    company: "",
    position: "",
    startingDateXP: "",
    endingDateXP: "",
    locationXP: "",
    desc: "",
  });

  function handlePersonalChange(key, value) {
    setPersonalValues({ ...personalValues, [key]: value });
  }

  function handleEducationChange(key, value) {
    setEducationValues({ ...educationValues, [key]: value });
  }

  function handleExpChange(key, value) {
    setExpValues({ ...expValues, [key]: value });
  }

  return (
    <div className="container">
      <div className="inputs">
        <Personal handleChange={handlePersonalChange} />
        <Education handleChange={handleEducationChange} />
        <Experience handleChange={handleExpChange} />
      </div>
      <Resume
        personalValues={personalValues}
        educationValues={educationValues}
        expValues={expValues}
      />
    </div>
  );
}

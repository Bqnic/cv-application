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

  const [allEducationValues, setAllEducationValues] = useState([]);

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

  function handleExpChange(key, value) {
    setExpValues({ ...expValues, [key]: value });
  }

  return (
    <div className="container">
      <div className="inputs">
        <Personal handleChange={handlePersonalChange} />
        <Education
          educationValues={educationValues}
          allEducationValues={allEducationValues}
          setAllEducationValues={setAllEducationValues}
          setEducationValues={setEducationValues}
        />
        <Experience handleChange={handleExpChange} />
      </div>
      <Resume
        personalValues={personalValues}
        educationValues={educationValues}
        expValues={expValues}
        allEducationValues={allEducationValues}
      />
    </div>
  );
}

import { useState } from "react";
import Personal from "./components/Personal";
import "./app.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import "./components/compCSS/edu-exp.css";
import { exampleData } from "./example-data";

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

  const [allExpValues, setAllExpValues] = useState([]);

  const [showEduOrExp, setShowEduOrExp] = useState(0);

  function handlePersonalChange(key, value) {
    setPersonalValues({ ...personalValues, [key]: value });
  }

  return (
    <div className="container">
      <div className="inputs">
        <div className="theBtns">
          <button
            className="exampleBtn"
            onClick={() => {
              setPersonalValues(exampleData.personalInfo);
              setAllEducationValues([exampleData.educationInfo]);
              setAllExpValues(exampleData.expInfo);
            }}
          >
            Load example data
          </button>
          <button
            className="exampleBtn"
            onClick={() => {
              setPersonalValues({ name: "", mail: "", phone: "", adress: "" });
              setEducationValues({
                school: "",
                degree: "",
                startingDateEdu: "",
                endingDateEdu: "",
                locationEdu: "",
              });
              setAllEducationValues([]);
              setExpValues({
                company: "",
                position: "",
                startingDateXP: "",
                endingDateXP: "",
                locationXP: "",
                desc: "",
              });
              setAllExpValues([]);
            }}
          >
            Reset CV
          </button>
        </div>
        <Personal
          handleChange={handlePersonalChange}
          personalValues={personalValues}
        />
        <Education
          educationValues={educationValues}
          allEducationValues={allEducationValues}
          setAllEducationValues={setAllEducationValues}
          setEducationValues={setEducationValues}
          showEduOrExp={showEduOrExp}
          setShowEduOrExp={setShowEduOrExp}
        />
        <Experience
          expValues={expValues}
          setExpValues={setExpValues}
          allExpValues={allExpValues}
          setAllExpValues={setAllExpValues}
          showEduOrExp={showEduOrExp}
          setShowEduOrExp={setShowEduOrExp}
        />
      </div>
      <Resume
        personalValues={personalValues}
        educationValues={educationValues}
        expValues={expValues}
        allEducationValues={allEducationValues}
        allExpValues={allExpValues}
      />
    </div>
  );
}

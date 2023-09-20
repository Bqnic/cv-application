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
  const [showInputs, setShowInputs] = useState(0);

  function handleShowInputsChange(i) {
    setShowInputs(i);
  }

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

  function deleteFromEducationArray(index) {
    let updatedEducationArray = [...allEducationValues];
    updatedEducationArray.splice(index, 1);
    setAllEducationValues(updatedEducationArray);
  }

  function revertEducationArray(value, index) {
    let updatedEducationArray = [...allEducationValues];
    updatedEducationArray[index] = value;
    setAllEducationValues(updatedEducationArray);
  }

  function changeEducationArray(key, value, index) {
    let updatedEducationValue = { ...allEducationValues[index] };
    updatedEducationValue[key] = value;
    let updatedEducationArray = [...allEducationValues];
    updatedEducationArray[index] = updatedEducationValue;

    setAllEducationValues(updatedEducationArray);
  }

  function updateEducationArray() {
    setAllEducationValues([...allEducationValues, educationValues]);
    setEducationValues({
      school: "",
      degree: "",
      startingDateEdu: "",
      endingDateEdu: "",
      locationEdu: "",
    });
  }

  function handleExpChange(key, value) {
    setExpValues({ ...expValues, [key]: value });
  }

  return (
    <div className="container">
      <div className="inputs">
        <Personal handleChange={handlePersonalChange} />
        <Education
          currentValue={educationValues}
          handleChange={handleEducationChange}
          updateArray={updateEducationArray}
          educationArr={allEducationValues}
          showInputs={showInputs}
          changeShowInputs={handleShowInputsChange}
          changeEducationArray={changeEducationArray}
          revertEducationArray={revertEducationArray}
          deleteFromEducationArray={deleteFromEducationArray}
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

import { useState } from "react";
import Input from "./Input";

export default function Education({
  educationValues,
  allEducationValues,
  setAllEducationValues,
  setEducationValues,
}) {
  const [eduIndex, setEduIndex] = useState(0);
  const [oldEduValue, setOldEduValue] = useState({});
  const [showInputs, setShowInputs] = useState(0);

  function changeIndex(i) {
    setEduIndex(i);
    setOldEduValue(allEducationValues[i]);
  }

  function handleChange(key, value) {
    setEducationValues({ ...educationValues, [key]: value });
  }

  function resetEducationValues() {
    setEducationValues({
      school: "",
      degree: "",
      startingDateEdu: "",
      endingDateEdu: "",
      locationEdu: "",
    });
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

  function updateArray() {
    setAllEducationValues([...allEducationValues, educationValues]);
    setEducationValues({
      school: "",
      degree: "",
      startingDateEdu: "",
      endingDateEdu: "",
      locationEdu: "",
    });
  }

  if (showInputs === 1)
    return (
      <form>
        <fieldset className="education">
          <legend>Education</legend>
          <Input
            forInput="school"
            labelText="School"
            type="text"
            onChange={handleChange}
          />
          <Input
            forInput="degree"
            labelText="Degree"
            type="text"
            onChange={handleChange}
          />
          <div className="dates">
            <Input
              forInput="startingDateEdu"
              labelText="Start date"
              type="text"
              onChange={handleChange}
            />
            <Input
              forInput="endingDateEdu"
              labelText="End date"
              type="text"
              onChange={handleChange}
            />
          </div>
          <Input
            forInput="locationEdu"
            labelText="Location"
            type="text"
            onChange={handleChange}
          />
          <button
            className="save"
            type="button"
            onClick={() => {
              if (educationValues.school.trim() !== "") {
                updateArray();
                setShowInputs(0);
              } else alert("Enter school... NOW!");
            }}
          >
            Save
          </button>
          <button
            className="cancel"
            type="button"
            onClick={() => {
              resetEducationValues();
              setShowInputs(0);
            }}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    );
  else if (showInputs === 0)
    return (
      <div className="show">
        {allEducationValues.map((element, index) => (
          <button
            key={index}
            className="card"
            onClick={() => {
              setShowInputs(2);
              changeIndex(index);
            }}
          >
            <div>
              <p>{element.school}</p>
              <p>{element.degree}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteFromEducationArray(index);
              }}
            >
              Delete
            </button>
          </button>
        ))}
        <button className="adding" onClick={() => setShowInputs(1)}>
          Add new education
        </button>
      </div>
    );
  else
    return (
      <form>
        <fieldset className="education">
          <legend>Education</legend>
          <Input
            forInput="school"
            labelText="School"
            type="text"
            onChange={changeEducationArray}
            value={allEducationValues[eduIndex].school}
            index={eduIndex}
          />
          <Input
            forInput="degree"
            labelText="Degree"
            type="text"
            onChange={changeEducationArray}
            value={allEducationValues[eduIndex].degree}
            index={eduIndex}
          />
          <div className="dates">
            <Input
              forInput="startingDateEdu"
              labelText="Start date"
              type="text"
              onChange={changeEducationArray}
              value={allEducationValues[eduIndex].startingDateEdu}
              index={eduIndex}
            />
            <Input
              forInput="endingDateEdu"
              labelText="End date"
              type="text"
              onChange={changeEducationArray}
              value={allEducationValues[eduIndex].endingDateEdu}
              index={eduIndex}
            />
          </div>
          <Input
            forInput="locationEdu"
            labelText="Location"
            type="text"
            onChange={changeEducationArray}
            value={allEducationValues[eduIndex].locationEdu}
            index={eduIndex}
          />
          <button
            className="save"
            type="button"
            onClick={() => {
              if (allEducationValues[eduIndex].school.trim() !== "") {
                setShowInputs(0);
              } else alert("Enter school... NOW!");
            }}
          >
            Save
          </button>
          <button
            className="cancel"
            type="button"
            onClick={() => {
              resetEducationValues();
              revertEducationArray(oldEduValue, eduIndex);
              setShowInputs(0);
            }}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    );
}

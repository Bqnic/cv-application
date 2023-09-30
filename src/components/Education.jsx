import { useState } from "react";
import Input from "./Input";

export default function Education({
  educationValues,
  allEducationValues,
  setAllEducationValues,
  setEducationValues,
  showEduOrExp,
  setShowEduOrExp,
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
      <>
        <div
          className="closedDiv"
          onClick={() => setShowEduOrExp(showEduOrExp === 1 ? 0 : 1)}
        >
          <p>
            <img src="../school.svg"></img>
            Education
          </p>
          <img
            src={
              showEduOrExp === 1
                ? "../arrow-up-bold-outline.svg"
                : "../arrow-down-bold-outline.svg"
            }
          ></img>
        </div>
        {showEduOrExp === 1 ? (
          <form>
            <fieldset className="education">
              <legend>Education</legend>
              <Input
                forInput="school"
                labelText="School"
                type="text"
                onChange={handleChange}
                value={educationValues.school}
              />
              <Input
                forInput="degree"
                labelText="Degree"
                type="text"
                onChange={handleChange}
                value={educationValues.degree}
              />
              <div className="dates">
                <Input
                  forInput="startingDateEdu"
                  labelText="Start date"
                  type="text"
                  onChange={handleChange}
                  value={educationValues.startingDateEdu}
                />
                <Input
                  forInput="endingDateEdu"
                  labelText="End date"
                  type="text"
                  onChange={handleChange}
                  value={educationValues.endingDateEdu}
                />
              </div>
              <Input
                forInput="locationEdu"
                labelText="Location"
                type="text"
                onChange={handleChange}
                value={educationValues.locationEdu}
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
        ) : null}
      </>
    );
  else if (showInputs === 0)
    return (
      <>
        <div
          className="closedDiv"
          onClick={() => setShowEduOrExp(showEduOrExp === 1 ? 0 : 1)}
        >
          <p>
            <img src="../school.svg"></img>
            Education
          </p>
          <img
            src={
              showEduOrExp === 1
                ? "../arrow-up-bold-outline.svg"
                : "../arrow-down-bold-outline.svg"
            }
          ></img>
        </div>
        {showEduOrExp === 1 ? (
          <div className="show">
            {allEducationValues.map((element, index) => (
              <div
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
              </div>
            ))}
            <button className="adding" onClick={() => setShowInputs(1)}>
              Add new education
            </button>
          </div>
        ) : null}
      </>
    );
  else
    return (
      <>
        <div
          className="closedDiv"
          onClick={() => setShowEduOrExp(showEduOrExp === 1 ? 0 : 1)}
        >
          <p>
            <img src="../school.svg"></img>
            Education
          </p>
          <img
            src={
              showEduOrExp === 1
                ? "../arrow-up-bold-outline.svg"
                : "../arrow-down-bold-outline.svg"
            }
          ></img>
        </div>
        {showEduOrExp === 1 ? (
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
        ) : null}
      </>
    );
}

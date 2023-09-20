import { useState } from "react";
import Input from "./Input";
import "./compCSS/education.css";

export default function Education({
  currentValue,
  handleChange,
  updateArray,
  educationArr,
  showInputs,
  changeShowInputs,
  changeEducationArray,
  revertEducationArray,
  deleteFromEducationArray,
}) {
  const [eduIndex, setEduIndex] = useState(0);
  const [oldEduValue, setOldEduValue] = useState({});

  function changeIndex(i) {
    setEduIndex(i);
    setOldEduValue(educationArr[i]);
  }

  function cleanInputs() {
    currentValue.school = "";
    currentValue.degree = "";
    currentValue.startingDateEdu = "";
    currentValue.endingDateEdu = "";
    currentValue.locationEdu = "";
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
            type="button"
            onClick={() => {
              if (currentValue.school.trim() !== "") {
                updateArray();
                changeShowInputs(0);
              } else alert("Enter school... NOW!");
            }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              cleanInputs();
              changeShowInputs(0);
            }}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    );
  else if (showInputs === 0)
    return (
      <div className="show-education">
        {educationArr.map((element, index) => (
          <button
            key={index}
            className="card-education"
            onClick={() => {
              changeShowInputs(2);
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
        <button
          className="adding-education"
          onClick={() => changeShowInputs(1)}
        >
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
            value={educationArr[eduIndex].school}
            index={eduIndex}
          />
          <Input
            forInput="degree"
            labelText="Degree"
            type="text"
            onChange={changeEducationArray}
            value={educationArr[eduIndex].degree}
            index={eduIndex}
          />
          <div className="dates">
            <Input
              forInput="startingDateEdu"
              labelText="Start date"
              type="text"
              onChange={changeEducationArray}
              value={educationArr[eduIndex].startingDateEdu}
              index={eduIndex}
            />
            <Input
              forInput="endingDateEdu"
              labelText="End date"
              type="text"
              onChange={changeEducationArray}
              value={educationArr[eduIndex].endingDateEdu}
              index={eduIndex}
            />
          </div>
          <Input
            forInput="locationEdu"
            labelText="Location"
            type="text"
            onChange={changeEducationArray}
            value={educationArr[eduIndex].locationEdu}
            index={eduIndex}
          />
          <button
            type="button"
            onClick={() => {
              if (educationArr[eduIndex].school.trim() !== "") {
                changeShowInputs(0);
              } else alert("Enter school... NOW!");
            }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              cleanInputs();
              revertEducationArray(oldEduValue, eduIndex);
              changeShowInputs(0);
            }}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    );
}

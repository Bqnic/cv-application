import { useState } from "react";
import Input from "./Input";

export default function Experience({
  expValues,
  setExpValues,
  allExpValues,
  setAllExpValues,
  showEduOrExp,
  setShowEduOrExp,
}) {
  const [showInputs, setShowInputs] = useState(0);
  const [expIndex, setExpIndex] = useState(0);
  const [oldExpValue, setOldExpValue] = useState();

  function handleChange(key, value) {
    setExpValues({ ...expValues, [key]: value });
  }

  function changeExpArray(key, value, index) {
    let updatedExpValue = { ...allExpValues[index] };
    let updatedExpArray = [...allExpValues];

    updatedExpValue[key] = value;
    updatedExpArray[index] = updatedExpValue;
    setAllExpValues(updatedExpArray);
  }

  function deleteFromExpArray(index) {
    let updatedExpArray = [...allExpValues];
    updatedExpArray.splice(index, 1);
    setAllExpValues(updatedExpArray);
  }

  function updateArray() {
    setAllExpValues([...allExpValues, expValues]);
    resetExpValues();
  }

  function revertExpArray(value, index) {
    let updatedExpArray = [...allExpValues];
    updatedExpArray[index] = value;
    setAllExpValues(updatedExpArray);
  }

  function resetExpValues() {
    setExpValues({
      company: "",
      position: "",
      startingDateXP: "",
      endingDateXP: "",
      locationXP: "",
      desc: "",
    });
  }

  if (showInputs === 1)
    return (
      <>
        <div
          className="closedDiv"
          onClick={() => setShowEduOrExp(showEduOrExp === 2 ? 0 : 2)}
        >
          <p>
            <img src="../briefcase.svg"></img>
            Experience
          </p>
          <img
            src={
              showEduOrExp === 2
                ? "../arrow-up-bold-outline.svg"
                : "../arrow-down-bold-outline.svg"
            }
          ></img>
        </div>
        {showEduOrExp === 2 ? (
          <form>
            <fieldset className="xp">
              <legend>Experience</legend>
              <Input
                forInput="company"
                labelText="Company"
                type="text"
                onChange={handleChange}
                value={expValues.company}
              />
              <Input
                forInput="position"
                labelText="Position"
                type="text"
                onChange={handleChange}
                value={expValues.position}
              />
              <div className="dates">
                <Input
                  forInput="startingDateXP"
                  labelText="Start date"
                  type="text"
                  onChange={handleChange}
                  value={expValues.startingDateXP}
                />
                <Input
                  forInput="endingDateXP"
                  labelText="End date"
                  type="text"
                  onChange={handleChange}
                  value={expValues.endingDateXP}
                />
              </div>
              <Input
                forInput="locationXP"
                labelText="Location"
                type="text"
                onChange={handleChange}
                value={expValues.locationXP}
              />
              <Input
                forInput="desc"
                labelText="Description"
                type="text"
                onChange={handleChange}
                value={expValues.desc}
              />
              <button
                className="save"
                type="button"
                onClick={() => {
                  if (expValues.company.trim() !== "") {
                    updateArray();
                    setShowInputs(0);
                  } else alert("Enter company... NOW!");
                }}
              >
                Save
              </button>
              <button
                className="cancel"
                type="button"
                onClick={() => {
                  resetExpValues();
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
          onClick={() => setShowEduOrExp(showEduOrExp === 2 ? 0 : 2)}
        >
          <p>
            <img src="../briefcase.svg"></img>
            Experience
          </p>
          <img
            src={
              showEduOrExp === 2
                ? "../arrow-up-bold-outline.svg"
                : "../arrow-down-bold-outline.svg"
            }
          ></img>
        </div>
        {showEduOrExp === 2 ? (
          <div className="show">
            {allExpValues.map((element, index) => (
              <div
                key={index}
                className="card"
                onClick={() => {
                  setShowInputs(2);
                  setExpIndex(index);
                  setOldExpValue(allExpValues[index]);
                }}
              >
                <div>
                  <p>{element.company}</p>
                  <p>{element.position}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteFromExpArray(index);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
            <button className="adding" onClick={() => setShowInputs(1)}>
              Add new experience
            </button>
          </div>
        ) : null}
      </>
    );
  else
    return (
      <>
        <div className="closedDiv">
          <p>
            <img src="../public/briefcase.svg"></img>
            Experience
          </p>
          <img
            src={
              showEduOrExp === 2
                ? "../public/arrow-up-bold-outline.svg"
                : "../public/arrow-down-bold-outline.svg"
            }
          ></img>
        </div>
        {showEduOrExp === 2 ? (
          <form>
            <fieldset className="xp">
              <legend>Experience</legend>
              <Input
                forInput="company"
                labelText="Company"
                type="text"
                onChange={changeExpArray}
                value={allExpValues[expIndex].company}
                index={expIndex}
              />
              <Input
                forInput="position"
                labelText="Position"
                type="text"
                onChange={changeExpArray}
                value={allExpValues[expIndex].position}
                index={expIndex}
              />
              <div className="dates">
                <Input
                  forInput="startingDateXP"
                  labelText="Start date"
                  type="text"
                  onChange={changeExpArray}
                  value={allExpValues[expIndex].startingDateXP}
                  index={expIndex}
                />
                <Input
                  forInput="endingDateXP"
                  labelText="End date"
                  type="text"
                  onChange={changeExpArray}
                  value={allExpValues[expIndex].endingDateXP}
                  index={expIndex}
                />
              </div>
              <Input
                forInput="locationXP"
                labelText="Location"
                type="text"
                onChange={changeExpArray}
                value={allExpValues[expIndex].locationXP}
                index={expIndex}
              />
              <Input
                forInput="desc"
                labelText="Description"
                type="text"
                onChange={changeExpArray}
                value={allExpValues[expIndex].desc}
                index={expIndex}
              />
              <button
                className="save"
                type="button"
                onClick={() => {
                  if (allExpValues[expIndex].company.trim() !== "") {
                    setShowInputs(0);
                  } else alert("Enter company... NOW!");
                }}
              >
                Save
              </button>
              <button
                className="cancel"
                type="button"
                onClick={() => {
                  resetExpValues();
                  revertExpArray(oldExpValue, expIndex);
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

import { useState } from "react";
import Input from "./Input";

export default function Experience({
  expValues,
  setExpValues,
  allExpValues,
  setAllExpValues,
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

  if (showInputs === 1) {
    return (
      <form>
        <fieldset className="xp">
          <legend>Experience</legend>
          <Input
            forInput="company"
            labelText="Company"
            type="text"
            onChange={handleChange}
          />
          <Input
            forInput="position"
            labelText="Position"
            type="text"
            onChange={handleChange}
          />
          <div className="dates">
            <Input
              forInput="startingDateXP"
              labelText="Start date"
              type="text"
              onChange={handleChange}
            />
            <Input
              forInput="endingDateXP"
              labelText="End date"
              type="text"
              onChange={handleChange}
            />
          </div>
          <Input
            forInput="locationXP"
            labelText="Location"
            type="text"
            onChange={handleChange}
          />
          <Input
            forInput="desc"
            labelText="Description"
            type="text"
            onChange={handleChange}
          />
          <button
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
    );
  } else if (showInputs === 0) {
    return (
      <div className="show">
        {allExpValues.map((element, index) => (
          <button
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
          </button>
        ))}
        <button className="adding" onClick={() => setShowInputs(1)}>
          Add new experience
        </button>
      </div>
    );
  } else {
    return (
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
    );
  }
}

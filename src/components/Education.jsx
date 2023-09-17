import Input from "./Input";

export default function Education({ handleChange }) {
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
      </fieldset>
    </form>
  );
}

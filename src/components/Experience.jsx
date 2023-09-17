import Input from "./Input";

export default function Experience({ handleChange }) {
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
      </fieldset>
    </form>
  );
}

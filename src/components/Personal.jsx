import Input from "./Input";

export default function Personal({ handleChange }) {
  return (
    <form>
      <fieldset className="personal-details">
        <legend>Personal details</legend>
        <Input
          forInput="name"
          labelText="Full name"
          type="text"
          onChange={handleChange}
        />
        <Input
          forInput="mail"
          labelText="Email"
          type="email"
          onChange={handleChange}
        />
        <Input
          forInput="phone"
          labelText="Phone number"
          type="tel"
          onChange={handleChange}
        />
        <Input
          forInput="adress"
          labelText="Adress"
          type="text"
          onChange={handleChange}
        />
      </fieldset>
    </form>
  );
}

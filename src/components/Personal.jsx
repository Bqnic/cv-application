import Input from "./Input";

export default function Personal({ handleChange, personalValues }) {
  return (
    <form>
      <fieldset className="personal-details">
        <legend>Personal details</legend>
        <Input
          forInput="name"
          labelText="Full name"
          type="text"
          onChange={handleChange}
          value={personalValues.name}
        />
        <Input
          forInput="mail"
          labelText="Email"
          type="email"
          onChange={handleChange}
          value={personalValues.mail}
        />
        <Input
          forInput="phone"
          labelText="Phone number"
          type="tel"
          onChange={handleChange}
          value={personalValues.phone}
        />
        <Input
          forInput="adress"
          labelText="Adress"
          type="text"
          onChange={handleChange}
          value={personalValues.adress}
        />
      </fieldset>
    </form>
  );
}

import { useState } from "react";
import "./personal.css";
export default function Personal() {
  const [inputValues, setInputValues] = useState({
    name: "",
    mail: "",
    phone: "",
    adress: "",
  });

  function handleChange(key, value) {
    setInputValues({ ...inputValues, [key]: value });
  }

  return (
    <>
      <div className="labels">
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
      </div>
      <div className="output-para">
        <Output value={inputValues.name} />
        <Output value={inputValues.mail} />
        <Output value={inputValues.phone} />
        <Output value={inputValues.adress} />
      </div>
    </>
  );
}

function Input({ forInput, labelText, type, onChange }) {
  function sendValue(e) {
    onChange(forInput, e.target.value);
  }

  return (
    <>
      <label htmlFor={forInput}>{labelText}</label>
      <input type={type} id={forInput} onChange={sendValue} />
    </>
  );
}

function Output({ value }) {
  return <p>{value}</p>;
}

import "./compCSS/input.css";
export default function Input({ forInput, labelText, type, onChange }) {
  function sendValue(e) {
    onChange(forInput, e.target.value);
  }

  return (
    <div className="label-input">
      <label htmlFor={forInput}>{labelText}</label>
      <input type={type} id={forInput} onChange={sendValue} />
    </div>
  );
}

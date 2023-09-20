import "./compCSS/input.css";
export default function Input({
  forInput,
  labelText,
  type,
  onChange,
  value,
  index,
}) {
  function sendValue(e) {
    if (index >= 0) onChange(forInput, e.target.value, index);
    else onChange(forInput, e.target.value);
  }

  return (
    <div className="label-input">
      <label htmlFor={forInput}>{labelText}</label>
      <input type={type} id={forInput} onChange={sendValue} value={value} />
    </div>
  );
}

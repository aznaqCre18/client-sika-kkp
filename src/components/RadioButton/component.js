import React from 'react'

const RadioButton = ({label, idx, value}) => {
  return (
    <label className="custom-radio-btn" onClick={() => console.log(value)}>
      <span className="label">{label}</span>
      <input type="radio" name={`sample-${idx}`} />
      <span className="checkmark"></span>
    </label>
  )
}

export default RadioButton
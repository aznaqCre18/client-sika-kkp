import React from 'react';

function Input({label, placeholder, onChange, name, type = "text", defaultValue, style}) {
  return (
    <div style={style} className="input-wrapper">
      <label htmlFor="">{label}</label>
      <input autoCorrect="off" autoComplete="off" name={name} type={type} placeholder={placeholder} onChange={onChange} value={defaultValue} />
    </div>
  )
}

export default Input
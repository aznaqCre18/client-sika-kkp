import React from 'react'

function Button({label, type, onClick, width}) {
  return (
    <button style={width ? {width} : null} onClick={onClick} className={`btn-cmp ${type ? type : ''}`}>{label}</button>
  )
}

export default Button

import React from 'react'

function Alert(props) {
  const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
        }
  return (
    <div className='alert-text' style={{height: "3rem"}}>
      {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
      <strong>{capitalize(props.alert.type)} :</strong> {props.alert.msg}
      </div>}
    </div>
  )
}

export default Alert;

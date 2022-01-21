import React from 'react'

export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {/* shows all the children passed in messageBox component */} 
      {props.children}
    </div>
  )
}

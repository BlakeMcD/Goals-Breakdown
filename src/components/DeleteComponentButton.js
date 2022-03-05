import React from 'react'

function DeleteComponentButton(props) {


  return (
    <button onClick={props.deleteComponent(props.idValue)}>DeleteComponentButton</button>
  )
}

export default DeleteComponentButton
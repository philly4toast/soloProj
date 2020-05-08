import React from 'react'


function ModelItem(props){
  return (
    <div className="models">
      <input type='checkbox' checked={props.model.completed} id={props.model.id}/>
      <p>{props.model.text}</p>
    </div>
  )
}

export default ModelItem;
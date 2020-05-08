import React from 'react'


function ModelItem(props){
  return (
    <div>
    <div className="models">
      <input type='checkbox' checked={props.model.completed} id={props.model.id} onChange={()=>props.handleChange(props.model.id)} />
      <p>{props.model.text}</p>
    </div>
      <img className="thumbnail" src={props.model.imageURL}/>
      </div>
  )
}

export default ModelItem;
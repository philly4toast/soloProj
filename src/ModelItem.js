import React from 'react'

class ModelItem extends React.Component{
  render(){
    var completedStyle = {
      backgroundColor: 'black',
      fontStyle: 'italic',
      color: 'gray',
      textDecoration: 'line-through'
    }

    const {
      model,
      handleChange,
    } = this.props

    const style = model.completed ? completedStyle : null
    const imgSrc = model.completed ? model.completedURL : model.imageURL

    return (
      <div className="models" style={style} >
        <div>
          <input
            type='checkbox'
            checked={model.completed}
            id={model.id}
            onChange={
              ()=>handleChange(model.id)
            } />
          <p>{model.text}</p>
        </div>
        <img className="thumbnail" src={imgSrc}/>
      </div>
    )
  }
}

// function ModelItem(props){
//   return (
//     <div>
//     <div className="models">
//       <input type='checkbox' checked={props.model.completed} id={props.model.id} onChange={()=>props.handleChange(props.model.id)} />
//       <p>{props.model.text}</p>
//     </div>
//       <img className="thumbnail" src={props.model.imageURL}/>
//       </div>
//   )
// }

export default ModelItem;

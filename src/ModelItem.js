import React from 'react'



class ModelItem extends React.Component{

  render(){
    return (
      <div>
      <div className="models">
          <input type='checkbox' checked={this.props.model.completed} id={this.props.model.id} onChange={()=>this.props.handleChange(this.props.model.id)} />
          <p>{this.props.model.text}</p>
        </div>
          <img className="thumbnail" src={this.props.model.imageURL}/>
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
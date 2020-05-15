import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import sampleData from "../DB/sampleData.js"
import ModelItem from './ModelItem.js';
import {ajax} from "jquery";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      models: sampleData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    this.getModelList();
  }

  getModelList() {
    ajax({
      method: "GET",
      url: '/ammo',
      success: (response)=>console.log(response),
      error: (e)=>console.log('we have some problems with' + e)
    })
  }


  handleChange(id){
    this.setState(prevState=>{
      const newStatus = prevState.models.map(model=>{
        if (model.id === id){
          return {
            ...model,
            completed: !model.completed
          }
        }
        return model;
      })
      return {models: newStatus}
    })

    console.log('you just clicked on model # ', id)
  }




  render() {
    const todoModels = this.state.models.map(model => {
      return (
        <ModelItem 
          key={model.id}
          model={model} 
          handleChange={this.handleChange}
          />
      )
    })

    return (
      <div className="App">
        <h1> Quarantine Models </h1>
        <h2>{todoModels}</h2>
      </div>
    );
  }

}

export default hot(module)(App);
// export default App;
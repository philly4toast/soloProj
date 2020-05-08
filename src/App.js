import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import sampleData from "../DB/sampleData.js"
import ModelItem from './ModelItem.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      models: sampleData
    }
  }

  handleChange(id){

    console.log('you just clicked on model # ', id)
  }




  render() {
    const todoModels = this.state.models.map(model => {
    return (<ModelItem key={model.id}
        model={model} handleChange={this.handleChange}
        />)
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
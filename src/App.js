import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import sampleData from "../DB/sampleData.js"
import ModelItem from './ModelItem.js';

class App extends Component {


  render() {
    const todoModels = sampleData.map(model => {
    return (<ModelItem 
        type='checkBox' checked={model.completed} model={model}
        />)
    })

    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <h2>{todoModels}</h2>
      </div>
    );
  }
}

export default hot(module)(App);
// export default App;
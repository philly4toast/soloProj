import React from 'react';
import logo from './logo.svg';
import './App.css';
import todosData from './TodosData'
import TodoItem from './TodoItem'

class App extends React.Component {
  constructor(props){
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){

    console.log('The id of the item you\'re trying to change is ', id)
  }

  render(){
    let todoItems = this.state.todos.map(item =>
        <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
    )
    return (
      <div>
        {todoItems}
      </div>
    )
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          Lets get this started
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

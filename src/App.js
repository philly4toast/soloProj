import React from 'react';
import logo from './logo.svg';
import './App.css';
import todosData from './todosData'

class App extends React.Component {
  constructor(props){
    super()
    this.state = {
      todos: todosData
    }
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

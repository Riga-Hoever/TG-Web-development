import logo from './logo.svg'; 
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';

class App extends Component {
  
render() {
  return (
    <div className="App">
      <Greet />
    </div>
  )
};
};


export default App;

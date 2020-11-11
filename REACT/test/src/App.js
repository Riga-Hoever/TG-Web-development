import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import './Coding.js';

class App extends Component {
  
render() {
  return (
    <div className="App">
      <Greet />
      <Coding />
      <Gallery />
    </div>
  )
};
};


export default App;

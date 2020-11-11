import './App.css';
import Nav from './nav';
import Coding from './coding';
import Gallery from './gallery';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Nav />
          <Route path="/gallery" component={Gallery} />
          <Route path="/coding" component={Coding} />
          <Gallery />
          <Coding />
        </switch>
      </div>
    </Router>
  );
};

export default App;

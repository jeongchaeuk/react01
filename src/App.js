//import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Hello, React
      </header>
    </div>
  );
}*/

import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

// class 
class App extends Component {
  render() {
    // const name="aaa-app"
    return (
      <div>
        <Router>
          <Route exact path="/" component={Page1} />
          <Route path="/p2" component={Page2} />
        </Router>
      </div>
    );
  }
}

/*
function App() {
  const name="aaa"
  return (
    <div>
      <p>react</p>
      <p>{name}</p>
    </div>
  );
}
*/
export default App;

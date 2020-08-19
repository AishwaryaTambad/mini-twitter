import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Link, Switch, Route, Router} from 'react-router-dom';
import './App.css';
import Formcomponent from './components/Formcomponent'
import Registration from './components/Registration'
import ReactDOM from 'react-dom';
import Routes from './Routes';
import Home from './components/Home';



function App() {
  return (
    <div>
      {/* <li><Link to="/registration">Registration</Link></li>
      <Route path="/registration" component={Registration}></Route> */}

      {/* <Router><Switch><Route path="registration" exact><Registration></Registration></Route></Switch></Router> */}
     {/* <Formcomponent>
      
    </Formcomponent> */}
    <Home></Home>
    {/* <Routes></Routes> */}
   {/* <Registration></Registration> */}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;

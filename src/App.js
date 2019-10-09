import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Error from './Error.js';
import Main from './Main.js';

export default function App() {
  return (
 
      <div className="App">
        <span class="container">
        <span id="hero">
       <Router>
         
       <Switch>

        <Route path="/1">
          <Page1 />
        </Route>
        <Route path="/2">
          <Page2 />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/">
         <h3>FORK - A Portfolio Text Adventure</h3>
        <Link to="/1" className="clickable-option">click here to start</Link>
        </Route>

      </Switch>
      
      </Router> 
      </span>
    </span>
    </div>

    
  );
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);



import './App.css';
import React from 'react';
import List from './components/list.js';
import Nav from './components/navbar.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import ReportTab from './components/report.tsx';
import Help from './components/help.js';
function App() {
  return(
    <Router>
      <Nav></Nav>
      <Route path = "/" exact component = {List}></Route>
      <Route path = "/report" component = {ReportTab}></Route>
      <Route path = "/how-to-help" component = {Help}></Route>
    </Router>
  );
}
function Home() {
  return (
    <div className="App">
      <List/>
    </div>
  );
}

export default App;

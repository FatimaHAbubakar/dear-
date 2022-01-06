import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactDear from './containers/ContactDear';
import Posts from './containers/Posts';

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
      <Hero/>
      <Route path="/" exact component= {Home}/>
      <Route path="/Contact Dear Editors,"  component={ContactDear}/>
      <Route path= "/Posts/:postId" component={Posts}/>
    </div>
    </Router>
  );
}

export default App;

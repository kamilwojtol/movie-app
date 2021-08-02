import React from 'react'
import Header from './components/Header/Header';
import Films from './components/Films/Films';
import Social from './components/Social/Social';
import About from './components/About/About';
import Home from './components/Home/Home';


import styles from './App.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

export default function App() {
    return (
        
            <Router>
           <Header className={styles.header}/>
           <Switch>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/social">
            <Social />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>
        </Router>
        
    )
}

import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import Films from '../../Films/Films';
import Social from '../../Social/Social';
import About from '../../About/About';


function Navbar() {
  return (
    
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
        <li>
          <Link to="/social">Social</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
   
  )
}

export default Navbar

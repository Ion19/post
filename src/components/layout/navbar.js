import React from 'react'
import { Link } from 'react-router-dom';

const Navbar= () => {
  return (
    <>
    <ul id="categorires" className="dropdown-content">
        <li><Link to="/react">React</Link></li>
        <li><Link to="/redux">Redux</Link></li>        
        <li><Link to="/udacity">Udacity</Link></li>
    </ul>
    <nav>
        <div className="nav-wrapper">
            <Link className="brand-logo" to="/">Home</Link>
        <ul id="nav-mobile" className="right">
            <li><Link to="/createpost">Creat Post</Link></li>
            <li><a className="dropdown-trigger" href="#!" data-target="categorires">Categories</a></li>

        </ul>
        </div>
        
    </nav>
</>
  );
}


export default Navbar;

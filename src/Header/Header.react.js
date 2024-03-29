import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginNav from '../LoginNav/LoginNav.react';

export const Header = () => {
    return(
<div>
<nav className="navbar navbar-dark bg-dark navbar-expand-sm fixed-top row">
<ul className="navbar-nav ">

    
<div className="col-sm-3">
<li className="nav-item">
<a className="nav-link active" href="/home"><i className="fa fa-home"></i>Home</a>
</li>
</div>
<div className="col-sm-3">
<li className="nav-item">
<Link className="nav-link active" to='/aboutus'>About Us</Link></li>
</div>
<div className="col-sm-3">
<Link className="nav-link active" to='/registerdonor'>Register as Donor</Link>
</div>
<div className="col-sm-3">
<li className="nav-item active"><Link className="nav-link" to='/registerpatient'>Register as Patient</Link></li>
</div>
<div className="col-sm-3"><li className="nav-item">
<Link className="nav-link active" to='/bloodtips'>Blood Tips</Link></li>
</div>
<div className="col-sm-3">
<li className="nav-item">
<Link className="nav-link active" to='/contactus'>Contact Us</Link></li>
</div>
<div className="col-sm-3">
<LoginNav></LoginNav>
</div>
</ul>
</nav>
</div>
    )
}
export default Header;
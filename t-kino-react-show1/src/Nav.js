import { React } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import mainLogo from'./img/logo/mylogo.png';

export function Nav() {
  return (
    <header>
      <Navbar expand="lg" fixed="top" className="scrolling-navbar shadow">
        <div className="navbar">
          <div className="navbar-header navbar-nav mr-auto">
            <a href="/" className="pl-0"><img src={mainLogo} alt="logo" width="60px"/></a>
            <a className="navbar-brand" href="/">T-Kino</a>
          </div>
        </div>

        <div className="navbar" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link waves-effect" href="/movie/add">
                <span className="clearfix d-sm-inline-block">
                  <i className="fa fa-film"> + </i>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect" href="/profile/favs">
              <span className="clearfix d-sm-inline-block">
                  <i className="fa fa-heart"></i>
                </span>
              </a>
            </li>
            <NavDropdown className="dropdown-menu-right" title={<span><i className="fa fa-user"></i></span>}>
              <NavDropdown.Header>the_boy_who_lived</NavDropdown.Header>
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/friends">Friends</NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </Navbar>
    </header>
  );
}

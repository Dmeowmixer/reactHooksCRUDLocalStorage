import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavLink disabled href="#">Icon</NavLink>
          <NavLink href="#">Account</NavLink>
          <NavLink href="#">Orders</NavLink>
          <NavLink href="#">Logout</NavLink>
        </Nav>
      </div>
    );
  }
}
export default Navbar
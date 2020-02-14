import React, { useState } from "react";
import {
  NavbarToggler, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";
const SchoolSideMenu = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="side-menu">
      <div class="panel-group" id="accordion">
        <div class="panel panel-default">
          <div class="panel-heading">
            <NavLink tag={RRNavLink} to="/" activeClassName="active">  <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</NavLink>
          </div>
        </div>
        
        </div>
      </div> 
  );
};

export default SchoolSideMenu;

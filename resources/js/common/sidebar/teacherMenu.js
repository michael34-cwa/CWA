import React, { useState } from "react";
import {
  NavbarToggler, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";
const TeacherSideMenu = props => {
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

      
      {/* <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
              <i class="fa fa-bar-chart" aria-hidden="true"></i>Teachers<span className="toggleicon"><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-minus" aria-hidden="true"></i></span>
            </a>
          </h4>
        </div>
        <div id="collapseFour" class="panel-collapse collapse">
          <div class="panel-body">
            <Nav vertical>
              <NavItem>
                <NavLink exact={true}  tag={RRNavLink} to="/teachers" activeClassName="active"><i class="fa fa-list" aria-hidden="true"></i>Teachers List</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={RRNavLink} to="/teachers/create" activeClassName="active"><i class="fa fa-plus" aria-hidden="true"></i> Add New Teacher</NavLink>
              </NavItem>

            </Nav>
          </div>
        </div>  
      </div> */}

<div class="panel-group" id="accordion">
        <div class="panel panel-default">
          <div class="panel-heading">
            <NavLink tag={RRNavLink} to="/students" activeClassName="active">  <i class="fa fa-bar-chart" aria-hidden="true"></i> Students</NavLink>
          </div>
        </div>
        
        </div>

       
 

      </div> 
  );
};

export default TeacherSideMenu;

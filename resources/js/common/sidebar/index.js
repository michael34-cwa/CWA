import React, { useState } from "react";
import {
  NavbarToggler, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink 
} from "reactstrap";
import { NavLink as RRNavLink  } from "react-router-dom";
const sideMenu = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="side-menu">
         <Nav vertical  >
    
  
        {/*<Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
          </DropdownToggle>
           <DropdownMenu>
            <DropdownItem header>
              <i class="fa fa-adjust" aria-hidden="true"></i> Header
            </DropdownItem>
            <DropdownItem disabled>
              <i class="fa fa-adjust" aria-hidden="true"></i> Action
            </DropdownItem>
            <DropdownItem>
              <i class="fa fa-adjust" aria-hidden="true"></i> Another Action
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <i class="fa fa-adjust" aria-hidden="true"></i> Another Action
            </DropdownItem>
          </DropdownMenu> 
        </Dropdown>*/}
        <NavItem>
          <NavLink tag={RRNavLink} to="dashboard" activeClassName="active">Dashboard</NavLink>
        </NavItem> 

        <NavItem>
            <NavLink tag={RRNavLink} to="course_categories" activeClassName="active">Course Categories</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="courses" activeClassName="active">Courses</NavLink> 
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="tasks" activeClassName="active">Tasks</NavLink>
        </NavItem>
          {/* <NavItem>
          <NavLink href="#">
            <i class="fa fa-adjust" aria-hidden="true"></i> Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i class="fa fa-adjust" aria-hidden="true"></i> Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i class="fa fa-adjust" aria-hidden="true"></i> Another Link
          </NavLink>
        </NavItem>
        <NavItem className="active">
          <NavLink href="#">
            <i class="fa fa-adjust" aria-hidden="true"></i> Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i class="fa fa-adjust" aria-hidden="true"></i> Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <i class="fa fa-adjust" aria-hidden="true"></i> Another Link
          </NavLink>
        </NavItem> */}
      </Nav>
 
    </div>
  );
};

export default sideMenu;

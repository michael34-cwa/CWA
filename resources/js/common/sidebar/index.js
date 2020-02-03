import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";
import { BrowserRouter, Link, Router, Route } from "react-router-dom";
const sideMenu = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="side-menu">
      <Nav vertical>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
          </DropdownToggle>
          {/* <DropdownMenu>
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
          </DropdownMenu> */}
        </Dropdown>
        <NavItem>
          <Link to="/technologies">
            <i class="fa fa-adjust" aria-hidden="true"></i> Technologies
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/courses">
            <i class="fa fa-adjust" aria-hidden="true"></i> Courses
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/articles">
            <i class="fa fa-adjust" aria-hidden="true"></i> Students
          </Link>
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

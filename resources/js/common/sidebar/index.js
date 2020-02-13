import React, { useState } from "react";
import {
  NavbarToggler, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink 
} from "reactstrap";

import { NavLink as RRNavLink  } from "react-router-dom";
const sideMenu = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="side-menu">
    <div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
       <NavLink tag={RRNavLink} to="/dashboard" activeClassName="active">  <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</NavLink>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
         <i class="fa fa-archive" aria-hidden="true"></i> Course Categories <span className="toggleicon"><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-minus" aria-hidden="true"></i></span>
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse">
      <div class="panel-body">
        <Nav vertical  >
        <NavItem>
     <NavLink tag={RRNavLink} to="/course_categories" activeClassName="active">Course Categories List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/course_categories/create" activeClassName="active">Add Course Category</NavLink> 
        </NavItem>

      </Nav>
      </div>
    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
         <i class="fa fa-bar-chart" aria-hidden="true"></i> Courses <span className="toggleicon"><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-minus" aria-hidden="true"></i></span>
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse">
      <div class="panel-body">
           <Nav vertical>
            <NavItem>
     <NavLink tag={RRNavLink} to="/course_categories" activeClassName="active">Course List</NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={RRNavLink} to="/courses/create" activeClassName="active">Add New Courses</NavLink> 
        </NavItem>
             
      </Nav>
      </div>
     </div>
</div>



<div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsefour">
        <i class="fa fa-address-card" aria-hidden="true"></i>  Tasks <span className="toggleicon"><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-minus" aria-hidden="true"></i></span>
        </a>
      </h4>
    </div>
    <div id="collapsefour" class="panel-collapse collapse">
      <div class="panel-body">
           <Nav vertical>
    
        <NavItem>
          <NavLink tag={RRNavLink} to="/tasks" activeClassName="active">Tasks List</NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={RRNavLink} to="/tasks/create" activeClassName="active">Add New Task</NavLink> 
        </NavItem>
        
      
      </Nav>
      </div>
     </div>
</div>



</div>
         

 {/*
         <Nav vertical  >
    
  
      
        <NavItem>

          <NavLink tag={RRNavLink} to="/dashboard" activeClassName="active">  <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</NavLink>
        </NavItem> 
<Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
           Course Categories
          </DropdownToggle>
           <DropdownMenu>
            <DropdownItem>
            <NavLink tag={RRNavLink} to="/course_categories" activeClassName="active">Course Categories List</NavLink>
                  </DropdownItem>
            <DropdownItem>
              <NavLink tag={RRNavLink} to="/course_categories/create" activeClassName="active">Add Categories</NavLink> 
            </DropdownItem>
          </DropdownMenu> 
        </Dropdown>
        
        <NavItem>
          <NavLink tag={RRNavLink} to="/courses" activeClassName="active">Courses</NavLink> 
        </NavItem>
        <NavItem>
          <NavLink tag={RRNavLink} to="/tasks" activeClassName="active">Tasks</NavLink>
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
        </NavItem> 
      </Nav>*/}
 
    </div>
  );
};

export default sideMenu;

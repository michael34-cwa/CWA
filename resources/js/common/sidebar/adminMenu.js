import React, { useState } from "react";
import {
  NavbarToggler, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Container, Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";
const AdminSideMenu = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  
  return (
    <div className="side-menu">
      <div class="panel-group" id="accordion">
        <div class="panel panel-default">
          <div class="panel-heading">
            <NavLink tag={RRNavLink} to="/admin" activeClassName="active">  <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</NavLink>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                <i class="fa fa-th-large" aria-hidden="true"></i> Course Categories <span className="toggleicon"><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-minus" aria-hidden="true"></i></span>
              </a>
            </h4>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse">
            <div class="panel-body">
              <Nav vertical  >
                <NavItem>
                  <NavLink exact={true}  tag={RRNavLink} to="/admin/course_categories" activeClassName="active"><i class="fa fa-th-list" aria-hidden="true"></i> Course Categories List</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/admin/course_categories/create" activeClassName="active"><i class="fa fa-plus" aria-hidden="true"></i> Add Course Category</NavLink>
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
                  <NavLink exact={true}  tag={RRNavLink} to="/admin/courses" activeClassName="active"><i class="fa fa-th-list" aria-hidden="true"></i> Course List</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={RRNavLink} to="/admin/courses/create" activeClassName="active"><i class="fa fa-plus" aria-hidden="true"></i> Add New Courses</NavLink>
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
                  <NavLink exact={true}  tag={RRNavLink} to="/admin/tasks" activeClassName="active"><i class="fa fa-th-list" aria-hidden="true"></i> Tasks List</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={RRNavLink} to="/admin/tasks/create" activeClassName="active"><i class="fa fa-plus" aria-hidden="true"></i> Add New Task</NavLink>
                </NavItem>


              </Nav>
            </div>
          </div>
        </div>


        {/* <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsesix">
                <i class="fa fa-address-card" aria-hidden="true"></i>  Groups <span className="toggleicon"><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-minus" aria-hidden="true"></i></span>
              </a>
            </h4>
          </div>
          <div id="collapsesix" class="panel-collapse collapse">
            <div class="panel-body">
              <Nav vertical>

                <NavItem>
                  <NavLink exact={true}  tag={RRNavLink} to="/admin/groups" activeClassName="active"><i class="fa fa-th-list" aria-hidden="true"></i> Groups List</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={RRNavLink} to="/admin/groups/create" activeClassName="active"><i class="fa fa-plus" aria-hidden="true"></i> Add New Group</NavLink>
                </NavItem>


              </Nav>
            </div>
          </div>
        </div> */}

        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>School Lists<span className="toggleicon"><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-minus" aria-hidden="true"></i></span>
              </a>
            </h4>
          </div>
          <div id="collapseFive" class="panel-collapse collapse">
            <div class="panel-body">
              <Nav vertical>
                <NavItem>
                  <NavLink exact={true} tag={RRNavLink} to="/admin/school_lists" activeClassName="active"><i class="fa fa-th-list" aria-hidden="true"></i>Schools</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={RRNavLink} to="/admin/school_lists/create" activeClassName="active"><i class="fa fa-plus" aria-hidden="true"></i> Add New School</NavLink>
                </NavItem>

              </Nav>
            </div>
          </div>
        </div>


        {/* <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                <i class="fa fa-bar-chart" aria-hidden="true"></i>School Administrator<span className="toggleicon"><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-minus" aria-hidden="true"></i></span>
              </a>
            </h4>
          </div>
          <div id="collapseFour" class="panel-collapse collapse">
            <div class="panel-body">
              <Nav vertical>
                <NavItem>
                  <NavLink exact={true} tag={RRNavLink} to="/admin/school_administrator" activeClassName="active"><i class="fa fa-list" aria-hidden="true"></i>Administrator List</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink tag={RRNavLink} to="/admin/school_administrator/create" activeClassName="active"><i class="fa fa-plus" aria-hidden="true"></i> Add New Administrator</NavLink>
                </NavItem>

              </Nav>
            </div>
          </div>
        </div> */}
        
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

export default AdminSideMenu;

import React, { useState } from "react";
import {
 Nav, NavItem, NavLink
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";
const StudentSideMenu = props => {
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

 
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
              <i class="fa fa-bar-chart" aria-hidden="true"></i>Students<span className="toggleicon"><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-minus" aria-hidden="true"></i></span>
            </a>
          </h4>
        </div>
        <div id="collapseFive" class="panel-collapse collapse">
          <div class="panel-body">
            <Nav vertical>
              <NavItem>
                <NavLink exact={true} tag={RRNavLink} to="/students" activeClassName="active"><i class="fa fa-list" aria-hidden="true"></i>Students List</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={RRNavLink} to="/students/create" activeClassName="active"><i class="fa fa-plus" aria-hidden="true"></i> Add New Student</NavLink>
              </NavItem>

            </Nav>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudentSideMenu;

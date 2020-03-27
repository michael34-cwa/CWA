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
                  <NavLink tag={RRNavLink} to="/courses" activeClassName="active"><i class="fa fa-th-list" aria-hidden="true"></i> Course List</NavLink>
                </NavItem> 
              </Nav>
            </div>
          </div>
        </div>

 


      </div>

 

    </div>
  );
};

export default StudentSideMenu;

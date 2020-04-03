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
          <NavLink tag={RRNavLink} to="/courses" activeClassName="active"><i class="fa fa-th-list" aria-hidden="true"></i> Courses</NavLink>
          </div>
        </div>
 

      </div>

 

    </div>
  );
};

export default StudentSideMenu;

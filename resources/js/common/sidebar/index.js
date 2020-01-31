import React, { Component } from "react";
import PropTypes from "prop-types";
 import { Link } from 'react-router-dom'
 import { NavItem, NavLink, Nav } from "reactstrap";
 
class sideMenu extends Component {
 

  constructor(props) {
    super(props);


        this.state = {
          style: "menu",
          menuStatus: "open"
        };
        this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    switch (this.state.menuStatus) {
      case "open":
        this.setState({
          menuStatus: "close",
          style: "menu active"
        });
        break;
      case "close":
        this.setState({
          menuStatus: "open",
          style: "menu"
        });
        break;
    }
  }

  render() {
    return (
      //   <div className={classNames("sidebar", { "is-open": props.isOpen })}>
      <div className={"is-open"}>
        <div className="sidebar-header">
          {/* <span color="info" onClick={props.toggle} style={{ color: "#fff" }}>
            &times;
          </span> */} 
        </div>
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3">
            <p>Dummy Heading</p>
            {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
            <NavItem>
              <NavLink tag={Link} to={"/students"}>
                Students
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default sideMenu;

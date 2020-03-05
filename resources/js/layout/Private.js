//import libs
import React from "react";
import PropTypes from "prop-types";

// import components
import Navigation from "../common/navigation/index";
import ScrollTop from "../common/scroll-top/index";
import Footer from "../common/footer/index";
import AdminSideMenu from "../common/sidebar/adminMenu";
import SchoolSideMenu from "../common/sidebar/schoolMenu";
import StudentMenu from "../common/sidebar/studentMenu";
import TeacherMenu from "../common/sidebar/teacherMenu";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
const containerStyle = {
  paddingTop: "3.5rem"
};

const displayName = "Private Layout";
const propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.array
};

function PrivateLayout({ children, rolenane}) {
 
  let sideBars = '';

  if (rolenane == 'admin') {
    sideBars = <AdminSideMenu />;
  } else if (rolenane == 'school') {
    sideBars = <SchoolSideMenu />; 
  } else if (rolenane == 'student') {
    sideBars = <StudentMenu />;
  } else if (rolenane == 'teacher') {
    sideBars = <TeacherMenu />;
  }
    
 
  
  return (
    <div style={containerStyle}>
      <ToastContainer autoClose={3000} />
      <Navigation /> 
      <main className="dashbard-area">
        <div className="dashbard-inner"> 
           {sideBars}
          {children}
          <ScrollTop />
        </div>
      </main>
      <Footer />

    </div>
  );
}

PrivateLayout.dispatch = displayName;
PrivateLayout.propTypes = propTypes;

export default PrivateLayout;

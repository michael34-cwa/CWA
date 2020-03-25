import React, { Component } from "react";
import { Link } from 'react-router-dom' 
class dashBord extends Component {


  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="dashboard-right categories-list">
        <div className="row mb-20">
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/school_administrator" className="card gradient-1 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white card-title"><strong>School Administrator</strong></h2>
                <div className="row">
                    <div className="col-8 d-flex align-items-start justify-content-center flex-column">
                      <h3 className="text-white m-0 display-5"><strong>4565</strong></h3>
                      <p className="text-white m-0 date">Jan - March 2019</p>
                    </div>
                    <div className="col-4 d-flex align-items-end justify-content-center flex-column">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-graduation-cap"></i>
                      </span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/teachers" className="card gradient-2 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white card-title"><strong>Teachers</strong></h2>
                <div className="row">
                    <div className="col-8 d-flex align-items-start justify-content-center flex-column">
                      <h3 className="text-white m-0 display-5"><strong>4565</strong></h3>
                      <p className="text-white m-0 date">Jan - March 2019</p>
                    </div>
                    <div className="col-4 d-flex align-items-end justify-content-center flex-column">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-th-large"></i>
                      </span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/students" className="card gradient-3 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white card-title"><strong>Students</strong></h2>
                <div className="row">
                    <div className="col-8 d-flex align-items-start justify-content-center flex-column">
                      <h3 className="text-white m-0 display-5"><strong>4565</strong></h3>
                      <p className="text-white m-0 date">Jan - March 2019</p>
                    </div>
                    <div className="col-4 d-flex align-items-end justify-content-center flex-column">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-th-large"></i>
                      </span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/project_admin" className="card gradient-4 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white card-title"><strong>Project Admins</strong></h2>
                <div className="row">
                    <div className="col-8 d-flex align-items-start justify-content-center flex-column">
                      <h3 className="text-white m-0 display-5"><strong>4565</strong></h3>
                      <p className="text-white m-0 date">Jan - March 2019</p>
                    </div>
                    <div className="col-4 d-flex align-items-end justify-content-center flex-column">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-th-large"></i>
                      </span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/courses" className="card gradient-2 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white card-title"><strong>Course List</strong></h2>
                <div className="row">
                    <div className="col-8 d-flex align-items-start justify-content-center flex-column">
                      <h3 className="text-white m-0 display-5"><strong>4565</strong></h3>
                      <p className="text-white m-0 date">Jan - March 2019</p>
                    </div>
                    <div className="col-4 d-flex align-items-end justify-content-center flex-column">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-th-list"></i>
                      </span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="form-row boxessection mb-20">
          <div className="col-lg-4 col-sm-6">
            <div className="card ">
              <div className="card-body">
                <div className="text-center">
                  <i className="fa fa-tachometer" aria-hidden="true"></i>
                  <h2>School Dashboard</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card ">
              <div className="card-body">
                <div className="text-center">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                  <h2>  Course Categories</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <h2> Course</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-20">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h3>Course Categories</h3>
                <p>You can add edit and update your Course Categories</p>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    );
  }
}

export default dashBord;

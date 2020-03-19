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
            <Link to="/courses" className="card gradient-1 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white card-title"><strong>Courses</strong></h2>
                <div className="row">
                    <div className="col-8 d-flex align-items-start justify-content-center flex-column">
                      <h3 className="text-white m-0 display-5"><strong>4565</strong></h3>
                      <p className="text-white m-0 date">Jan - March 2019</p>
                    </div>
                    <div className="col-4 d-flex align-items-end justify-content-center flex-column">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-bar-chart"></i>
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
                  <h2> Dashboard</h2>
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
                <p>1You can add edit and update your Course Categories</p>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    );
  }
}

export default dashBord;

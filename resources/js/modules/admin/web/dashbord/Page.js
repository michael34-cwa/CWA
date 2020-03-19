import React, { Component } from "react";
import PropTypes from 'prop-types'
import moment from 'moment'
import { dashListRequest  } from '../service'
import { Button } from '@material-ui/core';
// import components 
import { Link } from 'react-router-dom' 
 import LoadingComponent from '../../../../common/loader'

class Page extends Component { 
  static propTypes = { 
     
    dispatch: PropTypes.func.isRequired
  };


  constructor(props) {
    super(props);

  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
    dispatch(dashListRequest({}));
  }

  render() {
    return (
      <div className="dashboard-right categories-list">
        <LoadingComponent isLoading={this.props.meta.loading} error={''} />  
        <div className="row mb-20">
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/admin/course_categories" className="card gradient-1 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white"><strong>Course Categories</strong></h2>
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <h3 className="text-white m-0 display-5"><strong>{this.props.courseCategories}</strong></h3>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-th-large"></i>
                      </span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/admin/courses" className="card gradient-2 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white"><strong>Course</strong></h2>
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <h3 className="text-white m-0 display-5"><strong>{this.props.courses}</strong></h3>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-bar-chart"></i>
                      </span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/admin/tasks" className="card gradient-3 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white"><strong>Tasks</strong></h2>
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <h3 className="text-white m-0 display-5"><strong>{this.props.tasks}</strong></h3>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-address-card"></i>
                      </span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/admin/school_lists" className="card gradient-4 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white"><strong>School List</strong></h2>
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <h3 className="text-white m-0 display-5"><strong>{this.props.schoolList}</strong></h3>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-graduation-cap"></i>
                      </span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="form-row boxessection dashboard-box-wrap mb-20">
          <div className="col-lg-4 col-sm-6">
            <div className="card ">
              <div className="card-body">
                <Link to="/admin/course_categories" className="text-center d-block">
                  <i className="fa fa-cog" aria-hidden="true"></i>
                  <h2>  Course Categories</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card">
              <div className="card-body">
                <Link to="/admin/courses" className="text-center d-block">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <h2> Course</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="card ">
              <div className="card-body">
                <Link to="/admin/tasks" className="text-center d-block">
                  <i className="fa fa-link" aria-hidden="true"></i>
                  <h2> Tasks</h2>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
 

      </div>
    );
  }
}

export default Page;

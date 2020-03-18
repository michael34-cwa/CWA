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
      <div className="dashboard-right">
        <LoadingComponent isLoading={this.props.meta.loading} error={''} />  
        <div className="form-row mb-20">
          <div className="col-lg-3 col-sm-6">
            <div className="card gradient-1">
              <div className="card-body">
                <h5 className="text-center text-white"><strong>Course Categories</strong></h5>
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <h2 className="text-white m-0">{this.props.courseCategories}</h2>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-shopping-cart"></i>
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card gradient-2">
              <div className="card-body">
                <h5 className="text-center text-white"><strong>Course</strong></h5>
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <h2 className="text-white m-0">{this.props.courses}</h2>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-money"></i>
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card gradient-3">
              <div className="card-body">
                <h5 className="text-center text-white"><strong>Tasks</strong></h5>
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <h2 className="text-white m-0">{this.props.tasks}</h2>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-users"></i>
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card gradient-4">
              <div className="card-body">
                <h5 className="text-center text-white"><strong>School List</strong></h5>
                <div className="row">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <h2 className="text-white m-0">{this.props.schoolList}</h2>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <span className="float-right display-5 opacity-5">
                        <i className="fa fa-heart"></i>
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-row boxessection dashboard-box-wrap mb-20">
    
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
        </div>
 

      </div>
    );
  }
}

export default Page;

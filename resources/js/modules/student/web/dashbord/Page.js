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
        <h1 className="text-center">Student Dashboard</h1> 
         <div className="row mb-20">
         
        
          <div className="col-xl-3 col-lg-6 col-md-12">
            <Link to="/courses" className="card gradient-3 mb-4">
              <div className="card-body p-3">
                <h2 className="text-center text-white card-title"><strong>Courses</strong></h2>
                <div className="row">
                    <div className="col-8 d-flex align-items-start justify-content-center flex-column">
                      <h3 className="text-white m-0 display-5"><strong>{this.props.student}</strong></h3> 
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
       
          {/* <div className="col-xl-3 col-lg-6 col-md-12">
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
          </div> */}
        </div>
      </div>
    );
  }
}

export default Page;

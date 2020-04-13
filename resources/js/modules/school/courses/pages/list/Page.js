// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { courseListRequest, courseUpdateRequest, courseRemoveRequest } from '../../service'
import { Button } from '@material-ui/core';

// import components
import CourseRow from './components/CourseRow'
import Pagination from '../../../../../common/Pagination'
import Search from '../../../../../common/Search'
import { Link } from 'react-router-dom'
import LoadingComponent from '../../../../../common/loader'

class Page extends Component {
  static displayName = "CoursesPage";
  static propTypes = {
    dataList: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

     this.pageChange = this.pageChange.bind(this);
    this.searchChange = this.searchChange.bind(this)
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
     dispatch(courseListRequest({}));
  }

  pageChange = (event, pageNumber) => {
    const value = this.state.searchData;
    this.props.dispatch(courseListRequest({ pageNumber, value }))
  }

 
  searchChange(name, value) {
    if (value.length >= 2) {
      this.setState({ searchData: value })
      this.props.dispatch(courseListRequest({ value }))
    } else {
      this.setState({ searchData: '' })
      this.props.dispatch(courseListRequest({}))
    }

  }

 

  renderCourses() {
 
    return this.props.courses.map((course, index) => {
      return (
        <CourseRow
          key={index}
          course={course}
          index={index}
        />
      );
    });
  }

  render() {  
    return (
      <main className="dashboard-right" role="main">
        <LoadingComponent isLoading={this.props.meta.loading} error={''} /> 
        <div className="card">
          <div className="card-body bg-white">
            <h1 class="text-center">Courses</h1>
            <div className="table-responsive">
              <Search onChange={this.searchChange} /> 
              <table className="table  table-striped">
                <thead className="thead-inverse">
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                {/* <th>Description</th> */}
                <th>Category</th>
                <th>Created Date</th>
                <th>Updated Date</th>
              </tr>
              </thead>
                {this.props.courses.length >= 1 ? this.renderCourses(this.props.meta.from) : <tr> <td colspan="5" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}

              </table>
            </div>
            <Pagination meta={this.props.meta} onChange={this.pageChange} />
 
          </div>
        </div>
      </main>
    );
  }
}

export default Page

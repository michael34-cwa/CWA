// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { courseListRequest, courseUpdateRequest, courseRemoveRequest } from '../../service'
import { Button } from '@material-ui/core';
// import components
import CourseRow from './components/CourseRow'
import Pagination from '../../../../../common/Pagination'
import { Link } from 'react-router-dom'

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

    this.togglePublish = this.togglePublish.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.pageChange = this.pageChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
    dispatch(courseListRequest({}));
  }

  pageChange(pageNumber) {
    this.props.dispatch(courseListRequest({ pageNumber }));
  }

  togglePublish(id) {
    const course = this.props.courses.find(course => course.id === id);

    if (!course) return;
    if (course.isActive) {
      course.isActive = 0;
    } else {
      course.isActive = 1;
    }
    this.props.dispatch(courseUpdateRequest(course.toJson(), '1'));
  }

  handleRemove(id) {
    this.props.dispatch(courseRemoveRequest(id));
  }

  renderCourses() {

    return this.props.courses.map((course, index) => {
      return (
        <CourseRow
          key={index}
          course={course}
          index={index}
          togglePublish={this.togglePublish}
          handleRemove={this.handleRemove}
        />
      );
    });
  }

  render() {
    return (
      <main className="dashboard-right" role="main">
        <div className="card">
          <div className="card-body bg-white">
            <h1 class="text-center">Courses</h1>
            <div className="table-responsive">
              <table className="table  table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th width="70px">Sr. No.</th>
                    <th width="150px">Name</th>
                    <th>Category</th>
                    <th width="140px">Created Date</th>
                    <th width="140px">Updated Date</th>
                    <th>
                      <Link to="/admin/courses/create">
                        <Button
                          size="small"
                          variant="contained"
                          className="text-capitalize colorPrimary mx-1"
                        >    <i class="fa fa-plus" aria-hidden="true"></i>  Add
                      </Button >
                      </Link>


                    </th>
                  </tr>
                </thead>
                {this.props.courses.length >= 1 ? this.renderCourses() : <tr> <td colspan="5" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}

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

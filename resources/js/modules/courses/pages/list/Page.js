// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { courseListRequest, courseUpdateRequest, courseRemoveRequest } from '../../service'

// import components
import CourseRow from './components/CourseRow'
import Pagination from './components/Pagination'
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
    console.log(course.toJson());
    this.props.dispatch(courseUpdateRequest(course.toJson(),'1'));
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
        <h1>Courses</h1>
        <div className="table-responsive">
          <table className="table  table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                {/* <th>Description</th> */}
                <th>Category</th>
                <th>Created Date</th>
                <th>Updated Date</th>
                <th>
                  <Link to="/courses/create" className="btn btn-success">
                    <i class="fa fa-plus" aria-hidden="true"></i>  Add
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>{this.renderCourses()}</tbody>
          </table>
        </div>
        <Pagination meta={this.props.meta} onChange={this.pageChange} />
      </main>
    );
  }
}

export default Page

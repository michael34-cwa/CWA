// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { courseListRequest, courseUpdateRequest, courseRemoveRequest } from '../../service'

// import components
import CourseRow from './components/CourseRow'
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    this.loadMore = this.loadMore.bind(this);

    this.state = { 
      visible: 4, 
    };
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
    this.props.dispatch(courseUpdateRequest(course.toJson(),'1'));
  }

  handleRemove(id) {
    this.props.dispatch(courseRemoveRequest(id));
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 4 };
    });
  }
  renderCourses() {
    //return  this.props.courses.slice(0, this.state.visible).map((course, index) => {
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
        <div  >
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
          {this.renderCourses()}
          </Grid>  
          </Grid>  
        </div>
        <Pagination meta={this.props.meta} onChange={this.pageChange} />  
        {/* {this.state.visible < this.props.courses.length &&
          <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
        } */}
      </main>
    );
  }
}

export default Page

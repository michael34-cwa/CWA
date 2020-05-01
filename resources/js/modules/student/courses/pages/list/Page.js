// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { courseListRequest, courseUpdateRequest, courseRemoveRequest,courseCategotyRequest } from '../../service'
import Search from '../../../../../common/Search'
// import components
import CourseRow from './components/CourseRow'
import Pagination from '../../../../../common/Pagination'
import LoadingComponent from '../../../../../common/loader'

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
    this.searchChange = this.searchChange.bind(this)
   // this.loadMore = this.loadMore.bind(this);

    this.state = { 
      visible: 4, 
      searchData: '', 
      id: '',
    };
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
    dispatch(courseCategotyRequest({}));

     dispatch(courseListRequest({}));
  }

 
  pageChange = (event, pageNumber) => { 
    const value = this.state.searchData;  
    this.props.dispatch(courseListRequest({ pageNumber, value})) 
  };

  searchChange(name, value) {
    if (value.length >= 2) {
      this.setState({ searchData: value })
      this.props.dispatch(courseListRequest({ value }))
    } else {
      this.setState({ searchData: '' })
      this.props.dispatch(courseListRequest({}))
    }

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

  // loadMore() {
  //   this.setState((prev) => {
  //     return { visible: prev.visible + 4 };
  //   });
  // }
  renderCourses() {
    //return  this.props.courses.slice(0, this.state.visible).map((course, index) => {
    return this.props.courses.map((course, index) => {
      return (
        <CourseRow
          key={index}
          course={course}
          cataroy={this.props.cataroy}
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
            <LoadingComponent isLoading={this.props.meta.loading} error={''} /> 
        <div className="card">
        <div className="card-body">
        <Grid item container>
          <Grid item xs={12} lg={6} className="d-flex align-item-center">
            <h1>Courses</h1>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Search onChange={this.searchChange} />
          </Grid> 
        </Grid>
        <Grid item container spacing={4}>
        
          {this.props.courses.length >0 ? this.renderCourses(): 'Not course found'}
          
        </Grid>
        <Pagination meta={this.props.meta} onChange={this.pageChange} />
        </div>
        </div>

      </main>
    );
  }
}

export default Page

// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { courseListRequest } from '../../service'
import Search from '../../../../../../common/Search'
// import components
import CourseRow from './components/CourseRow'
import Pagination from '../../../../../../common/Pagination'
import LoadingComponent from '../../../../../../common/loader'

import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Page extends Component {
  static displayName = "CoursesPage";
  static propTypes = {
     meta: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

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
    const { match, dispatch } = this.props
    let id = match.params.id; 
     dispatch(courseListRequest({id}));
  }

 
  pageChange = (event, pageNumber) => { 
    const { match, dispatch } = this.props
    let id = match.params.id;
    const value = this.state.searchData;  
    this.props.dispatch(courseListRequest({ pageNumber, value, id })) 
  };

  searchChange(name, value) {
    const { match, dispatch } = this.props
    let id = match.params.id;
    if (value.length >= 2) {
      this.setState({ searchData: value })
      this.props.dispatch(courseListRequest({ value, id  }))
    } else {
      this.setState({ searchData: '' })
      this.props.dispatch(courseListRequest({id}))
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
        <h1>Courses</h1>
        <Search onChange={this.searchChange} /> 
        <div>
        
          {this.renderCourses()}
          
        </div>
        <Pagination meta={this.props.meta} onChange={this.pageChange} />

      </main>
    );
  }
}

export default Page

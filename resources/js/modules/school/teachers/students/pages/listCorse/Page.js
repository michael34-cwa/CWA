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


  renderCourses(pageNo) {
     return this.props.courses.map((course, index) => {
      return (
        <CourseRow
           key={index}
          course={course}
          pageNo={pageNo++}
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
                    <th width="70px">Sr. No.</th>
                    <th width="150px">Name</th>
                    <th>Category</th>
                    <th width="140px">Created Date</th>
                    <th width="140px">Updated Date</th>
            
                  </tr>
                </thead>
                {this.props.courses.length >= 1 ? this.renderCourses(this.props.meta.from) : <tr> <td colspan="5" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}

              </table>
            </div>
            <Pagination meta={this.props.meta} onChange={this.pageChange} />
            {this.state.open && <DeleteModel openModel={this.openModel} opens={this.state.open} ids={this.state.id} handleRemove={this.handleRemove} />}

          </div>
        </div>
      </main>
    );
  }
}

export default Page

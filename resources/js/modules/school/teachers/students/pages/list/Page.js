// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { studentListRequest} from '../../service'
// import components
import StudentRow from './components/StudentRow'
import { Button } from '@material-ui/core';
import Pagination from '../../../../../../common/Pagination'
import { Link } from 'react-router-dom'
import Search from '../../../../../../common/Search'
import LoadingComponent from '../../../../../../common/loader'

class Page extends Component {
  static displayName = 'CategoriesPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    students: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
 
    this.pageChange = this.pageChange.bind(this)
    this.searchChange = this.searchChange.bind(this)
    this.state = { searchData: '' };

  }

  UNSAFE_componentWillMount() {
    const { match, dispatch } = this.props
    let id = match.params.id;
    dispatch(studentListRequest({ id }))
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const course = nextProps.course;
     console.log('course');
    console.log(course);
    if (!_.isEqual(this.state.course, course)) {
      this.setState({ course })
    }

  }

  pageChange = (event, pageNumber) => {
    const { match, dispatch } = this.props
    let id = match.params.id;
    const value = this.state.searchData;
    this.props.dispatch(studentListRequest({ pageNumber, value, id }))
  }



  searchChange(name, value) {
    const { match, dispatch } = this.props
    let id = match.params.id;
    if (value.length >= 2) {
      this.setState({ searchData: value })
      this.props.dispatch(studentListRequest({ value, id }))
    } else {
      this.setState({ searchData: '' })
      this.props.dispatch(studentListRequest({ id }))
    }

  }
 

  renderCategories(pageNo) {
    return this.props.students.map((category, index) => {
      return <StudentRow key={index}
        category={category}
        index={index} 
        pageNo={pageNo++}  />
    })
  }

  render() {
    return (
      <main className="dashboard-right" role="main">
        <LoadingComponent isLoading={this.props.meta.loading} error={''} /> 
        <div className="card">
          <div className="card-body bg-white">
            <h1 className="text-center" id="student-list-2">Students List</h1>
            <div className="table-responsive">
              <Search onChange={this.searchChange} />
              <table className="table  table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.props.students.length >= 1 ? this.renderCategories(this.props.meta.from) : <tr> <td colspan="10" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}</tbody>
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

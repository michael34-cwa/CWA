// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { categoryListRequest} from '../../service'
// import components
import CategoryRow from './components/CategoryRow'
import { Button } from '@material-ui/core';
import Pagination from '../../../../../common/Pagination'
import { Link } from 'react-router-dom'
import Search from '../../../../../common/Search'
import LoadingComponent from '../../../../../common/loader'

class Page extends Component {
  static displayName = 'CategoriesPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    course_categories: PropTypes.array.isRequired,
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
    dispatch(categoryListRequest({ id }))
  }

  pageChange = (event, pageNumber) => {
    const { match, dispatch } = this.props
    let id = match.params.id;
    const value = this.state.searchData;
    this.props.dispatch(categoryListRequest({ pageNumber, value, id }))
  }



  searchChange(name, value) {
    const { match, dispatch } = this.props
    let id = match.params.id;
    if (value.length >= 2) {
      this.setState({ searchData: value })
      this.props.dispatch(categoryListRequest({ value, id }))
    } else {
      this.setState({ searchData: '' })
      this.props.dispatch(categoryListRequest({ id }))
    }

  }
 

  renderCategories(pageNo) {
    return this.props.course_categories.map((category, index) => {
      return <CategoryRow key={index}
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
            <h1 className="text-center" id="1s">Students List</h1>
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
                    

                  </tr>
                </thead>
                {this.props.course_categories.length >= 1 ? this.renderCategories(this.props.meta.from) : <tr> <td colspan="10" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}
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

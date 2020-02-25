// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { categoryListRequest, categoryUpdateRequest, categoryRemoveRequest } from '../../service'
// import components
import CategoryRow from './components/CategoryRow'
import Pagination from '../../../../../common/Pagination'
import { Link } from 'react-router-dom'
import LoadingComponent from '../../../../../common/loader'
import DeleteModel from '../../../../../common/model/DeleteModel'
class Page extends Component {
  static displayName = 'CategoriesPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    course_categories: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.handleRemove = this.handleRemove.bind(this)
     this.pageChange = this.pageChange.bind(this)

    this.state = { open: false };
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props

    dispatch(categoryListRequest({}))
  }

  pageChange(pageNumber) {
    this.props.dispatch(categoryListRequest({ pageNumber }))
  }



 

  handleRemove(id) {  
     this.props.dispatch(categoryRemoveRequest(id))  
  }

  renderCategories() {
    return this.props.course_categories.map((category, index) => {
      if (category) { 
        return <CategoryRow key={index}
          category={category}
          pageNo={this.props.meta.from++}
          index={index}
          togglePublish={this.togglePublish} 
          handleRemove={this.handleRemove} />
      } else {
        return <LoadingComponent isLoading={true} error={''} />
      }
    })

  }
  render() {

    return (
      <main className="dashboard-right" role="main">
        <h1>Course Categories</h1>
        <div className="table-responsive">

          <table className="table  table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Sr. No.</th>
                <th>Category Name</th>
                <th>Created Date</th>
                <th>Updated Date</th>
                <th>
                  <Link to="/admin/course_categories/create" className="btn btn-success">
                    <i class="fa fa-plus" aria-hidden="true"></i> Add
                </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.course_categories.length >= 1 ? this.renderCategories() : <tr> <td colspan="5" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}</tbody>
          </table>
        </div>
   
        <Pagination meta={this.props.meta} onChange={this.pageChange} /> 
        {/* <DeleteModel openModel={this.openModel} opens={this.state.open} id={this.state.id} handleRemove={this.handleRemove} /> */}
        {/* {this.state.open && <DeleteModel openModel={this.openModel}  opens={this.state.open}  id={this.state.id} handleRemove={this.handleRemove}  />} */}
      </main>
    );
  }
}

export default Page

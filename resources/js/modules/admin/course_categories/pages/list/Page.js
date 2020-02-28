// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { categoryListRequest, categoryUpdateRequest, categoryRemoveRequest } from '../../service'
import { Button } from '@material-ui/core';
// import components
import CategoryRow from './components/CategoryRow'
import Pagination from '../../../../../common/Pagination'
import { Link } from 'react-router-dom'
 
//import DeleteModel from '../../../../../common/model/DeleteModel'
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

  pageChange = (event, pageNumber) => { 
 this.props.dispatch(categoryListRequest({ pageNumber })) 
  };

  

  handleRemove(id) {
    this.props.dispatch(categoryRemoveRequest(id))
  }

  renderCategories() {
    return this.props.course_categories.map((category, index) => {
 
        return <CategoryRow key={index}
          category={category}
          pageNo={this.props.meta.from++}
          index={index}
          togglePublish={this.togglePublish}
          handleRemove={this.handleRemove} />
      
    })

  }
  render() {

    return (
      <main className="dashboard-right" role="main">
        <div className="card">
          <div className="card-body bg-white">
            <h1 class="text-center">Course Categories</h1>
            <div className="table-responsive">
              <table className="table  table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th>
                    <th>Category Name</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th>

            
                      <Link to="/admin/course_categories/create">
                        <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                          <i class="fa fa-plus" aria-hidden="true"></i>  Add
                        </Button >
                      </Link>

                      {/* <Link to="/admin/course_categories/create" className="btn btn-success">
                        <i class="fa fa-plus" aria-hidden="true"></i> Add
                      </Link> */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.course_categories.length >= 1 ? this.renderCategories() : <tr> <td colspan="5" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}</tbody>
              </table>
            </div>
            <Pagination meta={this.props.meta} onChange={this.pageChange} />
           </div>
        </div>

        {/* <DeleteModel openModel={this.openModel} opens={this.state.open} id={this.state.id} handleRemove={this.handleRemove} /> */}
        {/* {this.state.open && <DeleteModel openModel={this.openModel}  opens={this.state.open}  id={this.state.id} handleRemove={this.handleRemove}  />} */}
      </main>
    );
  }
}

export default Page

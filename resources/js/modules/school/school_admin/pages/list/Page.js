// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import { categoryListRequest, categoryUpdateRequest, categoryRemoveRequest } from '../../service'
// import components
import { Button } from '@material-ui/core';
import CategoryRow from './components/CategoryRow'
import Pagination from '../../../../../common/Pagination'
import { Link } from 'react-router-dom'
 
class Page extends Component {
  static displayName = 'CategoriesPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    course_categories: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.togglePublish = this.togglePublish.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.pageChange = this.pageChange.bind(this)

    
  }
  
  UNSAFE_componentWillMount() {
    const { dispatch } = this.props
  
    dispatch(categoryListRequest({}))
  }
  
  pageChange(pageNumber) {
    this.props.dispatch(categoryListRequest({ pageNumber }))
  }
  
  togglePublish(id) {
    const course_categories = this.props.course_categories.find(course_categories => course_categories.id === id); 
    this.props.dispatch(categoryUpdateRequest(course_categories.toJson(), 1));
    this.props.dispatch(categoryListRequest({}))
  }

  
  handleRemove(id) { 
 
   this.props.dispatch(categoryRemoveRequest(id))  

   }
  
  renderCategories() {
    return this.props.course_categories.map((category, index) => {
      return <CategoryRow key={index}
      category={category}
                         index={index}
                         togglePublish={this.togglePublish}
                         handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
    return (

      <main className="dashboard-right" role="main">
        <div className="card">
          <div className="card-body bg-white">
            <h1 class="text-center">School Administrator</h1>
            <div className="table-responsive">
              <table className="table  table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th>
                      <Link to="school_administrator/create">
                      <Button
                        size="small"
                        variant="contained"
                        className="text-capitalize colorPrimary mx-1"
                      > 
                          <i class="fa fa-plus" aria-hidden="true"></i>  Add 
                      </Button >
                      </Link> 
                    </th>
                  </tr>
                </thead>
                {this.props.course_categories.length >= 1 ? this.renderCategories() : <tr> <td colspan="5" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>} 
 
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

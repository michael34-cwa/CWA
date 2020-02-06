// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { categoryListRequest, categoryUpdateRequest, categoryRemoveRequest } from '../../service'

// import components
import CategoryRow from './components/CategoryRow'
import Pagination from './components/Pagination'
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
    const category = this.props.course_categories.find(category => (category.id === id))
    
    if (!category)
      return
  
      category.published = !category.published
    if (category.published) {
      category.publishedAt = moment()
    } else {
      category.publishedAt = null
    }
    
    this.props.dispatch(categoryUpdateRequest(category.toJson()))
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
                <Link to="/course_categories/create" className="btn btn-success">
                  Add
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>{this.renderCategories()}</tbody>
        </table>
        </div>
        <Pagination meta={this.props.meta} onChange={this.pageChange} />
      </main>
    );
  }
}

export default Page
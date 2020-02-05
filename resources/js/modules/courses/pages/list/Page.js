// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { articleListRequest, articleUpdateRequest, articleRemoveRequest } from '../../service'

// import components
import ArticleRow from './components/ArticleRow'
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'

class Page extends Component {
  static displayName = 'ArticlesPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    articles: PropTypes.array.isRequired,
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
  
    dispatch(articleListRequest({}))
  }
  
  pageChange(pageNumber) {
    this.props.dispatch(articleListRequest({ pageNumber }))
  }
  
  togglePublish(id) {
    const article = this.props.articles.find(article => (article.id === id))
     
    if (!article)
      return 
    if (article.isActive) {
      article.isActive = 0;
    } else {
      article.isActive = 1;
    }
     this.props.dispatch(articleUpdateRequest(article.toJson()))
  }
  
  handleRemove(id) {
    this.props.dispatch(articleRemoveRequest(id))
  }
  
  renderArticles() {
    return this.props.articles.map((article, index) => {
      return <ArticleRow key={index}
                         article={article}
                         index={index}
                         togglePublish={this.togglePublish}
                         handleRemove={this.handleRemove}/>
    })
  }
  
  render() {
    return (
      <main className="dashboard-right" role="main">
        <h1>Courses</h1>
        <div className="table-responsive">
          <table className="table  table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Course Description</th>
                <th>Category</th>
                <th>Created Date</th>
                <th>Updated Date</th>
                <th>
                  <Link to="/courses/create" className="btn btn-success">
                    Add
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>{this.renderArticles()}</tbody>
          </table>
        </div> 
        <Pagination meta={this.props.meta} onChange={this.pageChange} />
      </main>
    );
  }
}

export default Page

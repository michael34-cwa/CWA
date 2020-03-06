// import libs
import { connect } from 'react-redux'
import CourseCategory from '../../CourseCategory'

// import components
import Page from './Page'

const mapStateToProps = state => {   
  const {data, ...meta} = state.course_categories

  return {
    course_categories: data.map((category) => new CourseCategory(category)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)

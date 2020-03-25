import { connect } from 'react-redux'
import CourseCategory from '../../CourseCategory'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
 
  const { params } = router.match
  const category = state.course_categories.data.find(category => category.id === Number(params.id))
  return {
    category: category ? new CourseCategory(category) : new CourseCategory({})
  }
}

export default connect(mapStateToProps)(Page)

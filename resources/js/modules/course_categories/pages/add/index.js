import { connect } from 'react-redux'
import CourseCategory from '../../CourseCategory'

// import components test
import Page from './Page'

const mapStateToProps = () => {
  const category = new CourseCategory({})
  return {
    category
  }
}
export default connect(mapStateToProps)(Page)

import { connect } from 'react-redux'
//import Course from '../../../../admin/courses/Course'
import Course from '../../Course'
// import components
import Page from './Page'

const mapStateToProps = (state, router) => {

  const { params } = router.match
    const { dataList,meta } = state.courses;

  const course = state.courses.data.find(course => course.id == window.atob(params.id))

  return {
    course: course ? new Course(course) : new Course({}),
       meta: Object.assign({}, meta),
       user: state.admin_user
  }
}

export default connect(mapStateToProps)(Page)

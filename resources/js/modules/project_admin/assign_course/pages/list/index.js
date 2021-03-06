// import libs
import { connect } from 'react-redux'
import AssignCourse from '../../AssignCourse'
import Course from '../../Course'
// import components
import Page from './Page'

const mapStateToProps = state => { 
  const { data, ...meta } = state.assign_course 
 
  //let dataLists = state.courses.data_lists; 
 
  return {
    assign_course: data.map((assignCourse) => new AssignCourse(assignCourse)),
    meta: Object.assign({}, meta),
    course_list: state.courses.data.map((course) => new Course(course)),
  }
}

export default connect(mapStateToProps)(Page)

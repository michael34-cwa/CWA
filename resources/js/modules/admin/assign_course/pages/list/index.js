// import libs
import { connect } from 'react-redux'
import AssignCourse from '../../AssignCourse'
import Course from '../../Course'
// import components
import Page from './Page'

const mapStateToProps = state => { 
  const { data, ...meta } = state.assign_course 
  
  // let course = [];
  let coursess = state.courses.data.length > 0 ? state.courses.data : [];
 
  return {
    assign_course: data.map((assignCourse) => new AssignCourse(assignCourse)),
    meta: Object.assign({}, meta),
    course_list: coursess.map((course) => new Course(course)),

  }
}

export default connect(mapStateToProps)(Page)

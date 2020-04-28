// import libs
import { connect } from 'react-redux'
import AssignStudent from '../../AssignStudent'
 import Course from '../../Student'
// import components
import Page from './Page'

const mapStateToProps = state => { 

  const { data, ...meta } = state.assign_course 
 
 
  let coursess = state.courses.data.length > 0 ? state.courses.data : [];

  return {
    assign_student: data.map((assignCourse) => new AssignStudent(assignCourse)),
    meta: Object.assign({}, meta),
   student_list: coursess.map((course) => new Course(course)),

  }
}

export default connect(mapStateToProps)(Page)

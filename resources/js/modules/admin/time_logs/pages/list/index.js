// import libs
import { connect } from 'react-redux'
import AssignStudent from '../../AssignStudent'
 import Students from '../../Student'
 import Course from '../../Course'
 import Task from '../../Task'
// import components
import Page from './Page'

const mapStateToProps = state => { 

  const { data, ...meta } = state.assign_course 

  let coursess = state.courses.data.length > 0 ? state.courses.data : [];
  let coursList = state.project_admin.data.length > 0 ? state.project_admin.data : [];
  let taskList = state.tasks.data.length > 0 ? state.tasks.data : [];
 
  return {
    assign_student: data.map((assignCourse) => new AssignStudent(assignCourse)),
    meta: Object.assign({}, meta),
    student_list: coursess.map((student) => new Students(student)),
    course_list: coursList.map((courses) => new Course(courses)),
    task_list: taskList.map((task) => new Task(task)),
  }
}

export default connect(mapStateToProps)(Page)

import { connect } from 'react-redux'
import Task from '../../Task'
import Course from '../../Course'
import Chat from '../../Chat'
import Logs from '../../Logs'
// import components
import Page from './Page'

const mapStateToProps = (state, router) => {  
   const { data, ...meta } = state.school_lists; 
  let  taskDils = ''; 
  const { params } = router.match  
//   const tasks = state.courses.data.find(course => course.id == window.atob(params.cid))
//     if(tasks != undefined){
//        taskDils = tasks.getCourseTasks.find(course => course.id == window.atob(params.id))
//     }
   // let chats = state.students.data.length > 0 ? state.students.data : [];
   
   taskDils = state.courses.data.find(course => course.id == window.atob(params.cid))
   
   
   let  taskCorse= taskDils ? taskDils :"";
   let  taskSig= taskDils ? taskDils.getCourseTasks :"";
 
   return {
    course: taskSig ? new Task(taskSig) : new Task({}),
    courseOne: taskCorse ? new Course(taskCorse) : new Course({}),
    user: state.admin_user,
  //  chat: chats.map(chat => new Chat(chat)),
    logTime: data.map(logData => new Logs(logData)), 
    meta: Object.assign({}, meta)
  
   }
}

export default connect(mapStateToProps)(Page)

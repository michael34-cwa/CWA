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
   
  //  taskDils = state.courses.data.find(course => course.id == window.atob(params.cid))
   
   
  //  let  taskCorse= taskDils ? taskDils :"";
  //  let  taskSig= taskDils ? taskDils.getCourseTasks :"";

 
  var dataLists = [];
  if(JSON.stringify(state.tasks) === '{}') { //This will check if the object is empty
    dataLists = []
  
 } else if(state.tasks == 'undefined'){
  dataLists = []
 
 }else{
  dataLists = state.tasks.data
 }
 
//  let taskDatas = state.assign_course ? state.assign_course : '';
 
   return {
    tasks: dataLists, 
   // taskData : taskDatas ? new Task(taskDatas) : new Task({}),

     // courseOne: taskCorse ? new Course(taskCorse) : new Course({}),
    user: state.admin_user,
  //  chat: chats.map(chat => new Chat(chat)),
    logTime: data.map(logData => new Logs(logData)), 
    meta: Object.assign({}, meta)
  
   }
}

export default connect(mapStateToProps)(Page)

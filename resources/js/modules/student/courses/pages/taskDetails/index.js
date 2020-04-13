import { connect } from 'react-redux'
import Task from '../../Task'
import Chat from '../../Chat'
// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
 console.log(state)
  let  taskDils = ''; 
  const { params } = router.match  
  const tasks = state.courses.data.find(course => course.id == window.atob(params.cid))
    if(tasks != undefined){
       taskDils = tasks.getCourseTasks.find(course => course.id == window.atob(params.id))
    }
    let chats = state.students.data.length > 0 ? state.students.data : [];
  return {
    course: taskDils ? new Task(taskDils) : new Task({}),
    user: state.admin_user,
    chat: chats ? new Chat(chats) : new Chat({}),

   }
}

export default connect(mapStateToProps)(Page)

import { connect } from 'react-redux'
import Task from '../../Task'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  let  taskDils = '';
  const { params } = router.match 
    const tasks = state.courses.data.find(course => course.id === Number(params.cid))
   console.log(tasks) 
    if(tasks != undefined){
       taskDils = tasks.getCourseTasks.find(course => course.id === Number(params.id))
    }
  return {
    course: taskDils ? new Task(taskDils) : new Task({}),
   }
}

export default connect(mapStateToProps)(Page)

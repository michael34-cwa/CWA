// import libs
import { connect } from 'react-redux'
import AssignTask from '../../AssignTask'
import Task from '../../Task'
// import components
import Page from './Page'

const mapStateToProps = state => { 

  const { data, ...meta } = state.assign_course 
  console.log('state.courses')
  console.log(state.tasks.data)
  return {
    assign_task: data.map((assignTask) => new AssignTask(assignTask)),
    meta: Object.assign({}, meta),
    task_list: state.tasks.data.map((task) => new Task(task)),
  }
}

export default connect(mapStateToProps)(Page)

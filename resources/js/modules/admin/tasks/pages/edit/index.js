import { connect } from 'react-redux'
import Task from '../../Task'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  const { dataList } = state.tasks;
   let dataLists = dataList ? dataList : []; 
  const task = state.tasks.data.find(task => task.id == window.atob(params.id))
  return {
    task: task ? new Task(task) : new Task({}),
    dataList: dataLists
  }
}

export default connect(mapStateToProps)(Page)

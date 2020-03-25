import { connect } from 'react-redux'
import Task from '../../Task'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
 
  const { params } = router.match
console.log(state)
    const task = state.courses.data.find(course => course.id === Number(params.id))
  
  return {
    course: task ? new Task(task) : new Task({}),
   }
}

export default connect(mapStateToProps)(Page)

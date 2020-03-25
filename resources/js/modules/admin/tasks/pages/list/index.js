// import libs
import { connect, useSelector } from 'react-redux'
import Task from '../../Task'

// import components
import Page from './Page'
  
const mapStateToProps = state => { 
 
  const { data, ...meta } = state.tasks;  
   let dataLists = data ? data : [];
  return {
    tasks: dataLists.map(tasks => new Task(tasks)), 
    meta: Object.assign({}, meta)
  };
}

export default connect(mapStateToProps)(Page)


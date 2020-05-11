import moment from 'moment'
import Model from '../../../utils/Model'
import User from '../../user/User'
class Task extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }
  
  initialize(props) {

       
    super.initialize(props)    
    this.taskName = props.getTask ? props.getTask.taskName  : "";
    this.taskDescription = props.getTask   ? props.getTask.taskDescription  : "";
    this.link = props.getTask  ? props.getTask.link  : "";
    this.mainId = props.id || "";  
    this.taskId = props.taskId || ""; 
    this.status = props.pivot ? props.pivot.status : "";
    
     // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Task

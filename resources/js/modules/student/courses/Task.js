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
    this.taskName = props.taskName || "";
    this.taskDescription = props.taskDescription || ""; 
    this.status = props.pivot ? props.pivot.status : "";
    this.description = props.pivot ? props.pivot.description : "";
    this.taskId = props.pivot ? props.pivot.id : "";
    
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Task

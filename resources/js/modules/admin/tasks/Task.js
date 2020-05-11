import moment from 'moment'
import Model from '../../../utils/Model'
class Task extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }
 
  initialize(props) {
    super.initialize(props)       
    this.taskName = props.taskName || "";
    this.taskDescription = props.taskDescription || "";
    this.courseId = props.getCourse ? props.getCourse.id :[]; 
    this.courseName = props.getCourse || "";
    this.link = props.link || "";
    this.translate = props.translate || "";
    this.isActive = props.isActive || "";
    // relate user model
  }
}

export default Task

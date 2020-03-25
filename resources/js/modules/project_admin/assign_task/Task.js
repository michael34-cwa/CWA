import Model from '../../../utils/Model'
 
class Task extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {    
    super.initialize(props)  
    // this.courseId = props.courseId ? props.courseId : ""; 
    this.courseId = props.id ? props.id : ""; 
    this.course_name = props.taskName ? props.taskName :""; 
    // relate user model
   }
}

export default Task

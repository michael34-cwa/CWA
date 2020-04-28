import Model from '../../../utils/Model'
 
class AssignTask extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {   
    if (props.status == 0){
      status = 'Assigned'
    } else if (props.status == 1){
      status = 'In-Progress'
    }else{
      status = 'Completed'
    }
 
    super.initialize(props) 
    this.courseId = props.courseId ? props.courseId : ""; 
    this.taskName = props.getTask ? props.getTask.taskName :""; 
    this.status = status;
    // relate user model
   }
}

export default AssignTask

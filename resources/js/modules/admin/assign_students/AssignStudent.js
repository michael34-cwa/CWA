import Model from '../../../utils/Model'
 
class AssignStudent extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {   
 
     super.initialize(props) 
    this.studentId = props.user ? window.btoa(props.user.id) : "";
    // this.studentName = props.user ? props.user.firstName+' '+props.user.lastName :""; 
    this.courseName = props.getCourse ? props.getCourse.courseName:"";
    this.taskName = props.getTask ? props.getTask.taskName:"";
    this.user = props.user ? props.user: [];
    // relate user model
   }
}

export default AssignStudent

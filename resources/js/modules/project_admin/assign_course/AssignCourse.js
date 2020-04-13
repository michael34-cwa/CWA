import Model from '../../../utils/Model'
 
class AssignCourse extends Model {
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
    this.courseId = props.courseId ? window.btoa(props.courseId) : "";
    this.schoolId = props.schoolId ? window.btoa(props.schoolId) : "";
    this.status = status;
    this.courseName = props.getCourse ? props.getCourse.courseName :""; 
    // relate user model
   }
}

export default AssignCourse

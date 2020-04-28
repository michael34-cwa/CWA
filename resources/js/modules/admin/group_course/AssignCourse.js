import Model from '../../../utils/Model'
 
class AssignCourse extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {   
    super.initialize(props) 
    this.courseId = props.courseId ? window.btoa(props.courseId) : "";
     this.courseName = props.getCourse ? props.getCourse.courseName :""; 
    // relate user model
   }
}

export default AssignCourse

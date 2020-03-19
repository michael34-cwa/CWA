import Model from '../../../utils/Model'
 
class AssignCourse extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {    
    super.initialize(props) 
    this.courseId = props.courseId ? props.courseId : "";
    this.schoolId = props.schoolId ? props.schoolId : "";
    this.course_name = props.getCourse ? props.getCourse.courseName :""; 
    // relate user model
   }
}

export default AssignCourse

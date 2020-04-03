import moment from 'moment'
import Model from '../../../utils/Model'
class Course extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }
  
  initialize(props) {      
     super.initialize(props)   
    this.courseName = props.getStudentCourse ? props.getStudentCourse.courseName : "";
    this.courseDescription = props.getStudentCourse ? props.getStudentCourse.courseDescription : "";
    this.getTasks = props.getCourseTasks || "";
    this.studentId = props.studentId || "";
    this.catId = props.getCategory ? props.getCategory: [];
    this.status = props.status || ""; 
    this.createdAt = props.createdAt ? moment(props.createdAt) : null;
    this.updatedAt = props.updatedAt ? moment(props.updatedAt) : null; 
    this.path = props.path || "";
    // relate user model
  }
}

export default Course

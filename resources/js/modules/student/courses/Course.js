import moment from 'moment'
import Model from '../../../utils/Model'
import User from '../../user/User'
class Course extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {  
    console.log('props');
console.log(props);
    super.initialize(props)     
    this.courseName = props.getStudentCourse ? props.getStudentCourse.courseName : "";
    this.courseDescription = props.getStudentCourse ? props.getStudentCourse.courseDescription : "";
    this.getTasks = props.getCourseTasks || "";
    this.catId = props.getCategory ? props.getCategory: [];
    this.status = props.status || ""; 
    this.createdAt = props.createdAt ? moment(props.createdAt) : null;
    this.updatedAt = props.updatedAt ? moment(props.updatedAt) : null; 
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Course

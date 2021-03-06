import moment from 'moment'
import Model from '../../../utils/Model'
import User from '../../user/User'
class Course extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)   
     this.courseName = props.courseName || "";
    this.course = props.course || "";
    this.catId = props.getCategory|| "";
    this.courseDescription = props.courseDescription || "";
    this.getTasks = props.getTasks || "";
    this.type = props.type || "";
    this.typeDis = props.type == 0 ? "Normal" : "Informative";
    this.isActive = props.isActive || false; 
    this.createdAt = props.createdAt ? moment(props.createdAt) : null;
    this.updatedAt = props.updatedAt ? moment(props.updatedAt) : null; 
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Course

import Model from '../../../utils/Model'
 
class  Course extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {    

    super.initialize(props) 
    this.courseId = props.id ? window.btoa(props.id) : "";
     this.course_name = props.courseName ? props.courseName :""; 
    // relate user model
   }
}

export default Course

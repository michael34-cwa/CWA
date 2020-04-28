import Model from '../../../utils/Model'
 
class  Course extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {    

    super.initialize(props) 
    this.useId = props.id ? window.btoa(props.id) : "";
     this.name = props.courseName ? props.courseName :""; 
    // relate user model
   }
}

export default Course

import Model from '../../../utils/Model'
 
class SchoolList extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {
     super.initialize(props)  
    this.user_id = props.user ? props.user.id : "";
    this.email = props.user ? props.user.email : "";
    this.schoolName = props.schoolName ? props.schoolName :"";
    this.phone = props.user ? props.user.phone : "";
    this.schoolDescription = props.schoolDescription ? props.schoolDescription : "";
    this.schoolAddress = props.schoolAddress ? props.schoolAddress : "";
    this.isActive = props.activationsUser ? props.activationsUser.completed : "";  
    this.created_at = props.created_at || "";
    this.updated_at = props.updated_at || ""; 
    // relate user model
   }
}

export default SchoolList

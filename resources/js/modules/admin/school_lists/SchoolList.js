import Model from '../../../utils/Model'
 
class SchoolList extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {  console.log(props)
     super.initialize(props)  
    this.user_id = props.user ? window.btoa(props.user.id) : "";
    this.email = props.user ? props.user.email : "";
    this.schoolId = props.user ?  window.btoa(props.schoolId) : ""; 
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

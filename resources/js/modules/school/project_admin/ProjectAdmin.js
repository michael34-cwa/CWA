import Model from '../../../utils/Model'
 
class ProjectAdmin extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) { 
     super.initialize(props)  
    this.user_id = props.user ? props.user.id : '';
    this.firstName = props.user ? props.user.firstName : '';
    this.lastName = props.user ? props.user.lastName : '';
    this.email = props.user ? props.user.email : '';
    this.phone = props.user ? props.user.phone : '';
    // this.password =  '';
    // this.passwordConfirmation = '';
    this.created_at = props.created_at || "";
    this.updated_at = props.updated_at || "";
    this.isActive = props.activationsUser || "";  
    // relate user model
   }
}

export default ProjectAdmin

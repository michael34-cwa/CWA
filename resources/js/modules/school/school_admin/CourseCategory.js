import Model from '../../../utils/Model'
import User from '../../user/User'

class School extends Model {
  constructor(props) {
    super(props) 
    this.initialize(props)
  }

  initialize(props) { 
    super.initialize(props) 
    this.user_id = props.user ?  window.btoa(props.user.id)  : '';   
    this.first_name = props.user ? props.user.firstName : '';
    this.last_name = props.user ? props.user.lastName : '';
    this.email = props.user ? props.user.email : '';
    this.phone = props.user ? props.user.phone : '';
    this.created_at = props.created_at || "";
    this.updated_at = props.updated_at || ""; 
    this.activation = props.activationsUser || ""; 
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default School

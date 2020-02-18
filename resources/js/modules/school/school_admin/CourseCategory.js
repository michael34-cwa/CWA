import Model from '../../../utils/Model'
import User from '../../user/User'

class School extends Model {
  constructor(props) {
    super(props) 
    this.initialize(props)
  }

  initialize(props) { 
    super.initialize(props)    
    this.first_name = props.firstName || "";
    this.last_name = props.lastName || "";
    this.email = props.email || "";
    this.phone = props.phone || "";
    this.created_at = props.created_at || "";
    this.updated_at = props.updated_at || ""; 
    this.activation = props.activationsUser || ""; 
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default School

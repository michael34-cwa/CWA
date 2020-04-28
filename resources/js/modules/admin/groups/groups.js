import Model from '../../../utils/Model'
import User from '../../user/User'

class Group extends Model {
  constructor(props) {
    super(props) 
    this.initialize(props)
  }

  initialize(props) { 
     super.initialize(props)  
    this.group_name = props.groupName || "";
    this.schoolId = window.btoa(props.schoolId) || "";
    this.created_at = props.created_at || "";
    this.updated_at = props.updated_at || ""; 
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Group

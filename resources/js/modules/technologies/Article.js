import moment from 'moment'
import Model from '../../utils/Model'
import User from '../user/User'

class Article extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {  
    super.initialize(props)  
    this.technology_name = props.technologyName || "";
    this.created_at = props.created_at || "";
    this.updated_at = props.updated_at || "";
 
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Article

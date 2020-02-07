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
    this.taskName = props.taskName || "";
    this.taskDescription = props.taskDescription || "";
    this.catId = props.catId || "";
    this.courseId = props.getCourse || "";
    this.isActive = props.isActive || "";
    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Article

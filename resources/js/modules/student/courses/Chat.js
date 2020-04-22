import moment from 'moment'
import Model from '../../../utils/Model'

class Chat extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }
 
  initialize(props) {   
 
    super.initialize(props)    
    this.message = props.message || ""; 
    this.name = props.sender ? props.sender.firstName: '';
     this.senderId = props.sender ? props.sender.id: '';
     this.schoolId = props.sender ? props.schoolId: '';
    }
}

export default Chat

// import moment from 'moment'
 import Model from '../../../utils/Model'

class Logs extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }
 
  initialize(props) {   
 
    super.initialize(props)    
    // this.startTime = props.startTime || ""; 
    // this.endTime = props.endTime || ""; 
    this.vidDisc = props.vidDisc || ""; 
     this.name = props.user ? props.user.firstName +' '+props.user.lastName: ''; 
    // this.createdAt = props.createdAt ? moment(props.createdAt) : null;
    // this.updatedAt = props.updatedAt ? moment(props.updatedAt) : null; 
    }
}

export default Logs

import Model from '../../../utils/Model'
 
class LogsList extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {     
    super.initialize(props)  
    this.taskName = props.getTask ? props.getTask.taskName :""; 
    this.translate = props.translate ? props.translate :""; 
    this.getLogs = props.getLogs ? props.getLogs :""; 

    // relate user model
   }
}

export default LogsList

import Model from '../../../utils/Model'
 
class  Student extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {    
    super.initialize(props) 
    this.useId = props.user ? window.btoa(props.user.id) : "";
     this.name = props.user ? props.user.firstName+' '+props.user.lastName :""; 
    // relate user model
   }
}

export default Student

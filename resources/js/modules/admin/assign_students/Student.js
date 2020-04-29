import Model from '../../../utils/Model'
 
class  Student extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {    
    console.log(props)
   
    console.log('props')
   
    super.initialize(props) 
    this.useId = props.user ? props.user.id : "";
     this.name = props.user ? props.user.firstName+' '+props.user.lastName :""; 

    //  this.corseId = props.user ? window.btoa(props.user.id) : "";
    //  this.name = props.user ? props.user.courseName :""; 
    // relate user model
   }
}

export default Student

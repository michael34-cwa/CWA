import Model from '../../../utils/Model'
 
class SchoolList extends Model {
  constructor(props) {

  
    super(props) 
 
    this.initialize(props)
  }

  initialize(props) {
     super.initialize(props)  
    this.schoolName = props.schoolName || "";
    this.phone = props.phone || "";
    this.schoolDescription = props.schoolDescription || "";
    this.schoolAddress = props.schoolAddress || "";
    this.isActive = props.isActive || ""; 
    this.created_at = props.created_at || "";
    this.updated_at = props.updated_at || ""; 
    // relate user model
   }
}

export default SchoolList

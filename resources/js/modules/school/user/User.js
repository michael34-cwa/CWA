import Model from '../../../utils/Model'

class User extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) { 

    super.initialize(props) 
    this.firstName = props.firstName || ''
    this.lastName = props.lastName || ''
    this.email = props.email || ''
    this.phone = props.phone || ''
   this.schoolId = props.schoolist ? props.schoolist.id  : '' 
     this.schoolName = props.schoolist ? props.schoolist.schoolName  : '' 
     this.schoolAddress = props.schoolist ? props.schoolist.schoolAddress  : '' 
     this.schoolDescription = props.schoolist ? props.schoolist.schoolDescription  : '' 
    this.oldPassword =   '' 
    this.password =   '' 
    this.passwordConfirmation = '' 
  }
}
export default User

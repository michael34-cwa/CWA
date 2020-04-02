import Model from '../../../../utils/Model'

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
    this.oldPassword =   '' 
    this.password =   '' 
    this.passwordConfirmation = '' 
  }
}
export default User

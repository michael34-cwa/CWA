import Model from '../../utils/Model'

class User extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.first_name = props.first_name || ''
    this.last_name = props.last_name || ''
    this.email = props.email || ''
    this.phone = props.phone || '' 
  }
}

export default User

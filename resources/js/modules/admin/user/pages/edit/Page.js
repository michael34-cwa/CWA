// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { userUpdateRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'UserPage'
  static propTypes = {
    admin_user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({
      'firstName': 'required|min:2|max:28',
      'lastName': 'required|min:2|max:28',
      'email': 'required|email|max:28',
      'phone': 'required|min:8|numeric|max:28', 
      'oldPassword': 'min:6|max:28',
      'password': 'min:6|max:28',
      'passwordConfirmation': 'min:6|max:28',
    })
    
    const admin_user = this.props.admin_user.toJson()

    this.state = {
      admin_user,
      errors: this.validator.errors,
      loading: false
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentWillReceiveProps(nextProps) { 
    const admin_user = nextProps.admin_user.toJson()  
    if (!_.isEqual(this.state.admin_user, admin_user)) {
      this.setState({ admin_user })
    } 
  }
  
  handleChange(name, value) {
    const { errors } = this.validator 
    this.setState({ admin_user: { ...this.state.admin_user, [name]: value} })
    
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
          this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const admin_user = this.state.admin_user
    const { errors } = this.validator
    
    this.validator.validateAll(admin_user)
      .then((success) => {
        if (success) {
          this.submit(admin_user)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(admin_user) {
    this.setState({ loading: true })
    this.props.dispatch(userUpdateRequest(admin_user))
      .then(res => {
        this.setState({ loading: false }) 
      })
      .catch(({ error, statusCode }) => {
        this.setState({ loading: false }) 
        const { errors } = this.validator
        
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }
        
        this.setState({ errors })
      })
  }
  
  render() {
    return <main className="dashboard-right" role="main">
    <div class="card"><div class="card-body bg-white">
      <h1>Profile</h1>
  
      <section className="row">
        <div className="col-12 col-md-9 col-sm-12">
          <Form {...this.state}
                 loading={this.state.loading}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}/>
        </div>
      </section>
       </div>
        </div>
    </main>
  }
}

export default Page

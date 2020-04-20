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
    project_user: PropTypes.object.isRequired,
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
    
    const project_user = this.props.project_user.toJson()

    this.state = {
      project_user,
      errors: this.validator.errors,
      loading: false
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentWillReceiveProps(nextProps) { 
    const project_user = nextProps.project_user.toJson()  
    if (!_.isEqual(this.state.project_user, project_user)) {
      this.setState({ project_user })
    } 
  }
  
  handleChange(name, value) { 
    const { errors } = this.validator
    this.setState({ project_user: { ...this.state.project_user, [name]: value} })
    errors.remove(name) 
    if (name === 'passwordConfirmation') { 
       const result = this.validator.rules.confirmed(value, this.state.project_user.password); 
          if (!result) {
            this.validator.errors.add(name, 'Confirm password not matched with password');
          }
    }else if(name === 'phone'){
   
      if(! value.match(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)){
        this.validator.errors.add(name, 'US phone number not valid'); 
     }     
    } else {  
      this.validator.validate(name, value)
        .then(() => {
          this.setState({ errors })
        })
    } 

  }

  handleSubmit(e) {
    e.preventDefault()
    const project_user = this.state.project_user
    const { errors } = this.validator
    
    this.validator.validateAll(project_user)
      .then((success) => {
        if (success) {
          this.submit(project_user)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(project_user) {
    this.setState({ loading: true })
    this.props.dispatch(userUpdateRequest(project_user))
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
        <div className="col-12 col-md-12 col-sm-12">
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

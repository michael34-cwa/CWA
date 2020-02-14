// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { login, fetchUser} from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

// initialize component
class Page extends Component {
  // set name of the component
  static displayName = 'LoginPage'

  // validate props
  static propTypes = { 
    isAuthenticated: PropTypes.bool.isRequired,
    routeNameType: PropTypes.string,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.validator = new ReeValidate({
      email: 'required|email',
      password: 'required|min:6'
    })

    // set the state of the app
    this.state = {
      credentials: {
        email: '',
        password: '',
        remember: false,
      }, 
      routeNameType: '',
      errors: this.validator.errors
    }

    // bind component with event handlers
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // after mounting the component add a style to the body
  componentDidMount() {
    $('body').attr('style', 'background-color: #eee')
  }

  // remove body style before component leaves dom
  componentWillUnmount() {
    $('body').removeAttr('style')
  }

  // event to handle input change
  handleChange(name, value) {
    const { errors } = this.validator

    this.setState({ credentials: { ...this.state.credentials, [name]: value } })

    errors.remove(name)

    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }

  // event to handle form submit
  handleSubmit(e) {
    e.preventDefault()
    const { credentials } = this.state
    const { errors } = this.validator

    this.validator.validateAll(credentials)
      .then((success) => {
        if (success) {
          this.submit(credentials)
        } else {
          this.setState({ errors })
        }
      })
  }

  submit(credentials) {
    this.props.dispatch(login(credentials))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator

        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        } else if (statusCode === 401) {
          errors.add('password', error);
        }

        this.setState({ errors })
      })
  }

  // render component
  render() {
 
    // check if user is authenticated then redirect him to home page
    if (this.props.isAuthenticated) {    
      this.props.dispatch(fetchUser());  
      if (this.props.location.pathname === '/admin/login'){
        return <Redirect to="/admin" />
      }else{
        return <Redirect to="/" />
      } 
    }
    const props = {
      email: this.state.credentials.email,
      password: this.state.credentials.password,
      remember: this.state.credentials.remember,
      errors: this.state.errors,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      routeNameType: this.state.routeNameType,
    }

    
    return (<div className="container login-page">
      
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="login">

              <span className="anchor"/>
              <div className="card has-shadow">
                <div className="card-body">
                   <div className="logo-area">CWA</div>
                   <div className="login-wrapper">
                  <Form {...props}
                      routeNameType={this.props.routeNameType}
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default Page

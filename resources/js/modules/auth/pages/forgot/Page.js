//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { forgot } from '../../service'
import ReeValidate from 'ree-validate'
 // import components
import Form from './components/Form'
 
// initialize component
class Page extends Component {
  static displayName = 'ForgotPage'
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({ 
      email: 'required|email',  
    })
    
    this.state = {
      credentials: {
        email: ""
      },
      successMesg:'',
      errors: this.validator.errors, 
      fields: this.validator.fields
    };
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount() {
    $('body').attr('style', 'background-color: #eee')
  }
  
  componentWillUnmount() {
    $('body').removeAttr('style')
  }
  
  // event to handle input change
  handleChange(name, value) {
    const { errors } = this.validator
    this.setState({ successMesg: "" }); 
    this.setState({credentials: { ...this.state.credentials, [name]: value }})
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
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

    this.props
      .dispatch(forgot(credentials))
      .then(res => {  
           this.setState({ successMesg: res });  
      })
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator;

        if (statusCode === 401) {
          errors.add("email", error);
        }

        this.setState({ errors });
      });
  }
  
  render() {
 
    // check if user is authenticated then redirect him to home page
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    
    const {   email  } = this.state.credentials
    const props = {
      email,
      successMesg: this.state.successMesg,
      errors: this.state.errors,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    };
    
    return (<div className="container login-page">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="login">
              <span className="anchor"/>
              <div className="card has-shadow">
                <div className="card-body">
                 <div class="logo-area">CWA</div>
                 <div class="login-wrapper">
                  <Form {...props}  />
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

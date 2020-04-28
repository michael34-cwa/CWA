// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { categoryAddRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

import { browserHistory } from 'react-router'
class Page extends Component {
  static displayName = 'AddCategory'
  static propTypes = {
    category: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.validator = new ReeValidate({
      firstName: 'required|min:2|max:32',
      lastName: 'required|min:2|max:32',
      email: 'required|email|max:32',
      phone: 'required|min:10|max:32',
      password: 'required|min:6|max:32',
      passwordConfirmation: 'required|min:6|max:32'
    });

    const category = this.props.category.toJson()

    this.state = {
      category,
      errors: this.validator.errors,
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const category = nextProps.category.toJson()

    if (!_.isEqual(this.state.category, category)) {
      this.setState({ category })
    }

  }

  handleChange(name, value) { 
    const { errors } = this.validator
    this.setState({ category: { ...this.state.category, [name]: value} })
    errors.remove(name) 
    if (name === 'passwordConfirmation') { 
       const result = this.validator.rules.confirmed(value, this.state.category.password); 
          if (!result) {
            this.validator.errors.add(name, 'Confirm password not matched with password');
          }
    } else  if(name === 'phone'){
   
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
    const category = this.state.category
    const { errors } = this.validator

    this.validator.validateAll(category)
      .then((success) => {
        if (success) {
          this.submit(category)
        } else {
          this.setState({ errors })
        }
      })
  }

  submit(category) {
    let sid = this.props.match.params.sid 
    if(!sid){
     sid = '';
    }
    this.setState({ loading: true })
    this.props
      .dispatch(categoryAddRequest(category,sid))
      .then(res => {
        this.setState({ loading: false })
     //   this.props.history.push('/students');
        this.props.history.goBack();
      })
      .catch(({ error, statusCode }) => {
        this.setState({ loading: false })
        const { errors } = this.validator;
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        }

        this.setState({ errors });
      });
  }

  render() {

    return <div className="dashboard-right"><div className="card"><div className="card-body bg-white">
      <h1 class="page-heading text-center">Add Student</h1>
      <Form {...this.state}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    </div></div></div>

  }
}

export default Page

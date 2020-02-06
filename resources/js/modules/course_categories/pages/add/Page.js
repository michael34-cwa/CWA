// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { categoryAddRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
 
class Page extends Component {
  static displayName = 'AddCategory'
  static propTypes = {
    category: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {  
    super(props)
    
    this.validator = new ReeValidate({
      category_name: "required|min:2"
    });
    
    const category = this.props.category.toJson()
    
    this.state = {
      category,
      errors: this.validator.errors
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
  
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
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
    this.props
      .dispatch(categoryAddRequest(category))
      .then(res => {  
        
      })
      .catch(({ error, statusCode }) => { 
        const { errors } = this.validator;  
         if (statusCode === 422) { 
          _.forOwn(error, (message, field) => {
            console.log(message);
            errors.add(field, message);
          });
        }

        this.setState({ errors });
      });
  }
  
  render() {
    return <div className="dashboard-right"><div className="card"><div className="card-body bg-white">
 
      <h1>Add Course Category</h1>
       <Form {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    </div></div></div>
  }
}

export default Page
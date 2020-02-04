// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { articleAddRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
 
class Page extends Component {
  static displayName = 'AddArticle'
  static propTypes = {
    article: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {  
    super(props)
    
    this.validator = new ReeValidate({
      technology_name: "required|min:2"
    });
    
    const article = this.props.article.toJson()
    
    this.state = {
      article,
      errors: this.validator.errors
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  componentWillReceiveProps(nextProps) {
    const article = nextProps.article.toJson()
    
    if (!_.isEqual(this.state.article, article)) {
      this.setState({ article })
    }
    
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
  
    this.setState({ article: { ...this.state.article, [name]: value} })
  
    errors.remove(name)
  
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const article = this.state.article
    const { errors } = this.validator
    
    this.validator.validateAll(article)
      .then((success) => {
        if (success) {
          this.submit(article)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(article) {
    this.props
      .dispatch(articleAddRequest(article))
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
    return <div className="dashboard-right"><div class="card"><div class="card-body bg-white">
      <h1>Add New technology</h1>
      <Form {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    </div></div></div>
  }
}

export default Page

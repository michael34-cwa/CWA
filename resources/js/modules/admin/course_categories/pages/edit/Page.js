// import libs
import React, { Component, Suspense} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { categoryEditRequest, categoryUpdateRequest } from '../../service'
import ReeValidate from 'ree-validate'
import { NavItem } from 'reactstrap'
import CircularProgress from "@material-ui/core/CircularProgress";
// import components

import Form from './components/Form'

class Page extends Component {
  static displayName = 'EditCategory'
  static propTypes = {
    match: PropTypes.object.isRequired,
    categroy: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({
      category_name: "required|min:2|max:100"
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

  UNSAFE_componentWillMount() {
    this.loadCategory();
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const category = nextProps.category.toJson() 
    if (!_.isEqual(this.state.category, category)) {
      this.setState({ category })
    }
    
  }
  
  loadCategory() {
    const { match, category, dispatch } = this.props 
   
    if (!category.id) {
      dispatch(categoryEditRequest(match.params.id))
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
    this.setState({ loading:true })
    this.props.dispatch(categoryUpdateRequest(category))
      .then(res => { 
        this.setState({ loading: false })
       this.props.history.push('/admin/course_categories');
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
  
  renderForm() { 
    const { category } = this.props 
    if (category.id) { 
      return <Form {...this.state}
        loading={this.state.loading}
                   onChange={this.handleChange}
                   onSubmit={this.handleSubmit} />
    }
    }
  
  
  render() {  
    return <main className="dashboard-right" role="main">   
    <div className="card">
      <div className="card-body bg-white"> 
      <h1 class="text-center">Update Category Name</h1> 
       { this.renderForm() }    
      </div>
      </div>
    </main>  
  }
}

export default Page

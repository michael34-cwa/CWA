// import libs
import React, { Component, Suspense} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { ProjectAdminEditRequest, ProjectAdminUpdateRequest } from '../../service'
import ReeValidate from 'ree-validate'
import { NavItem } from 'reactstrap'
import CircularProgress from "@material-ui/core/CircularProgress";
// import components

import Form from './components/Form'

class Page extends Component {
  static displayName = 'ProjectAdmin'
  static propTypes = {
    match: PropTypes.object.isRequired,
    project_admin: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({
      firstName: 'required|min:2|max:32',
      lastName: 'required|min:2|max:32',
      email: 'required|email|max:32',
      phone: 'required|min:10|max:32', 
    });
    
    const project_admin = this.props.project_admin.toJson()
 
    this.state = {
      project_admin,
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
    const project_admin = nextProps.project_admin.toJson() 
    if (!_.isEqual(this.state.project_admin, project_admin)) {
      this.setState({ project_admin })
    }
    
  }
  
  loadCategory() {
    const { match, project_admin, dispatch } = this.props 
   
    if (!project_admin.id) {
      dispatch(ProjectAdminEditRequest(match.params.id))
    }
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
    
    this.setState({ project_admin: { ...this.state.project_admin, [name]: value} })
    
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const project_admin = this.state.project_admin
    const { errors } = this.validator
    
    this.validator.validateAll(project_admin)
      .then((success) => {
        if (success) {
          this.submit(project_admin)
         } else {
          this.setState({ errors })
        }
      })
  }
 
  submit(project_admin) {  
    this.setState({ loading:true })
    this.props.dispatch(ProjectAdminUpdateRequest(project_admin))
      .then(res => { 
        this.setState({ loading: false })
        this.props.history.push('/project_admin');
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
    const { project_admin } = this.props 
    if (project_admin.id) { 
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
          <h1 class="text-center">Update Project Admin</h1> 
       { this.renderForm() }    
      </div>
      </div>
    </main>  
  }
}

export default Page

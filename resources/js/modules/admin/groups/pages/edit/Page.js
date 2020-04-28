// import libs
import React, { Component, Suspense} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { groupEditRequest, groupUpdateRequest } from '../../service'
import ReeValidate from 'ree-validate'
import { NavItem } from 'reactstrap'
import CircularProgress from "@material-ui/core/CircularProgress";
// import components

import Form from './components/Form'

class Page extends Component {
  static displayName = 'Editgroup'
  static propTypes = {
    match: PropTypes.object.isRequired,
    group: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({
      group_name: "required|min:2|max:100"
    });
    
    const group = this.props.group.toJson()
 
    this.state = {
      group,
      errors: this.validator.errors,
      loading: false
    }
 
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    
  }

  UNSAFE_componentWillMount() {
    this.loadgroup();
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const group = nextProps.group.toJson() 
    if (!_.isEqual(this.state.group, group)) {
      this.setState({ group })
    }
    
  }
  
  loadgroup() {
    const { match, group, dispatch } = this.props 
   
    if (!group.id) {
      dispatch(groupEditRequest(match.params.id))
    }
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
    
    this.setState({ group: { ...this.state.group, [name]: value} })
    
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const group = this.state.group
    const { errors } = this.validator
    
    this.validator.validateAll(group)
      .then((success) => {
        if (success) {
          this.submit(group)
         } else {
          this.setState({ errors })
        }
      })
  }
 
  submit(group) {  
    this.setState({ loading:true })
    this.props.dispatch(groupUpdateRequest(group))
      .then(res => { 
        this.setState({ loading: false })
       this.props.history.push('/admin/groups');
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
    const { group } = this.props 
    if (group.id) { 
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
      <h1 class="text-center">Update group Name</h1> 
       { this.renderForm() }    
      </div>
      </div>
    </main>  
  }
}

export default Page

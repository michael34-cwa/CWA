// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { groupAddRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'
 
import { browserHistory } from 'react-router'
 class Page extends Component {
  static displayName = 'Addgroup'
  static propTypes = {
    group: PropTypes.object.isRequired,
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
  
  componentWillReceiveProps(nextProps) {
    const group = nextProps.group.toJson()
    
    if (!_.isEqual(this.state.group, group)) {
      this.setState({ group })
    }
    
  }
  
  handleChange(name, value) {

    const { errors} = this.validator 
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
    const {match, dispatch } = this.props  
    let sid = match.params.sid;
    this.setState({ loading: true })
    this.props
      .dispatch(groupAddRequest(group,sid)) 
      .then(res => { 
        this.setState({ loading: false })
       this.props.history.push('/admin/groups/'+sid);  
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
    return <div className="dashboard-right">
      <div className="card"><div className="card-body bg-white">
  
      <h1 className="text-center">Add Course group</h1>
       <Form {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    </div></div></div> 
  }
}

export default Page

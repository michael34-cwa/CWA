// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { taskEditRequest, taskUpdateRequest, courseListRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = 'EditTask'
  static propTypes = {
    match: PropTypes.object.isRequired,
    task: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({
      taskName: "required|min:2",
      taskDescription: "required|min:2",
      isActive: "required",
      catId: "required"
    })
    
    const task = this.props.task.toJson()
    
    this.state = {
      task,
      errors: this.validator.errors
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  UNSAFE_componentWillMount() {

    this.loadTask()

  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const task = nextProps.task.toJson()
    
    if (!_.isEqual(this.state.task, task)) {
      this.setState({ task })
    }

  }
  
  loadTask() {
    const { match, task, dispatch } = this.props
    dispatch(courseListRequest({}));
    if (!task.id) {
      dispatch(taskEditRequest(match.params.id)) 
    
    }
  
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
    
    this.setState({ task: { ...this.state.task, [name]: value} })
    
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const task = this.state.task
    const { errors } = this.validator
    
    this.validator.validateAll(task)
      .then((success) => {
        if (success) {
          this.submit(task)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(task) {
    this.props.dispatch(taskUpdateRequest(task),0)
      .then(res => {
        this.props.history.push('/admin/tasks');
      })
      .catch(({ error, statusCode }) => {
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
    const { task, dataList } = this.props
    
    if (task.id) {
      return <Form {...this.state}
        dataList={dataList}
                   onChange={this.handleChange}
                   onSubmit={this.handleSubmit} />
    }
  }
  
  render() {
    return <main className="dashboard-right" role="main">
    <div class="card"><div class="card-body bg-white">
   <h1 class="page-heading text-center">Edit a Task</h1>

      { this.renderForm() }
      </div>
      </div>
    </main>
  }
}

export default Page

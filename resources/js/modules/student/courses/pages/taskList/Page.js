// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { courseEditRequest, courseUpdateRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import TaskRow from './components/TaskRow'

class Page extends Component {
  static displayName = 'EditCourse'
  static propTypes = {
    match: PropTypes.object.isRequired,
    course: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({
      courseName: "required|min:2",
      courseDescription: "required|min:2",
      is_active: "required",
      catId: "required"
    })
    
    const course = this.props.course.toJson()
    
    this.state = {
      course,
      errors: this.validator.errors
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  UNSAFE_componentWillMount() {

    this.loadCourse()

  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const course = nextProps.course.toJson()
    
    if (!_.isEqual(this.state.course, course)) {
      this.setState({ course })
    }

  }
  
  loadCourse() {  
    const { match, course, dispatch } = this.props
     if (!course.id) {  
      dispatch(courseEditRequest(match.params.id))  
    }
   
  }
  
  handleChange(name, value) {
    const { errors } = this.validator
    
    this.setState({ course: { ...this.state.course, [name]: value} })
    
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const course = this.state.course
    const { errors } = this.validator
    
    this.validator.validateAll(course)
      .then((success) => {
        if (success) {
          this.submit(course)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(course) {
    this.props.dispatch(courseUpdateRequest(course),0)
      .then(res => {
        this.props.history.push('/admin/courses');
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
  
  renderList() {
    const { course, dataList } = this.props
    
    if (course.id) {
      return <TaskRow {...this.state}
        dataList={dataList}
                   onChange={this.handleChange}
                   onSubmit={this.handleSubmit} />
    }
  }
  
  render() {
    return <main className="dashboard-right" role="main">
    <div class="card"><div class="card-body bg-white">
      <h1>Course Details</h1>
        {this.renderList() }
      </div>
      </div>
    </main>
  }
}

export default Page

// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { taskAddRequest, courseListRequest } from "../../service";
import ReeValidate from 'ree-validate'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = "AddTask";
  static propTypes = {
    task: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.validator = new ReeValidate({
      course_name: "required|min:2",
      course_description: "required|min:2",
      is_active:"required",
      course_id: "required"
    });

    const task = this.props.task.toJson();
     this.state = { 
      task,
      errors: this.validator.errors
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
    dispatch(courseListRequest({}));
  }

  componentWillReceiveProps(nextProps) {
    const task = nextProps.task.toJson();

    if (!_.isEqual(this.state.task, task)) {
      this.setState({ task });
    }
  }

  handleChange(name, value) {
    const { errors } = this.validator;

    this.setState({ task: { ...this.state.task, [name]: value } });

    errors.remove(name);

    this.validator.validate(name, value).then(() => {
      this.setState({ errors });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = this.state.task;
    const { errors } = this.validator;

    this.validator.validateAll(task).then(success => {
      if (success) {
        this.submit(task);
      } else {
        this.setState({ errors });
      }
    });
  }

  submit(task) {
     this.props
       .dispatch(taskAddRequest(task))
       .then(res => { 
         console.log('ede');
         this.props.history.push('/admin/tasks');
       })
      .catch(({ error, statusCode }) => {
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
    return ( 
      <div className="dashboard-right">
      <div class="card"><div class="card-body bg-white">
        <h1>Add a Task</h1>
        <Form
          {...this.state}
          dataList={this.props.dataList}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        </div>
        </div>
      </div>
    );
  }
}

export default Page

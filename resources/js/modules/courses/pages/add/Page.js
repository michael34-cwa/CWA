// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { articleAddRequest, categoryListRequest } from "../../service";
import ReeValidate from 'ree-validate'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// import components
import Form from './components/Form'

class Page extends Component {
  static displayName = "AddArticle";
  static propTypes = {
    article: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.validator = new ReeValidate({
      course_name: "required|min:2",
      course_description: "required|min:2",
      is_active:"required",
      catId: "required"
    });

    const article = this.props.article.toJson();
     this.state = { 
      article,
      errors: this.validator.errors
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
    dispatch(categoryListRequest({}));
  }

  componentWillReceiveProps(nextProps) {
    const article = nextProps.article.toJson();

    if (!_.isEqual(this.state.article, article)) {
      this.setState({ article });
    }
  }

  handleChange(name, value) {
    const { errors } = this.validator;

    this.setState({ article: { ...this.state.article, [name]: value } });

    errors.remove(name);

    this.validator.validate(name, value).then(() => {
      this.setState({ errors });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const article = this.state.article;
    const { errors } = this.validator;

    this.validator.validateAll(article).then(success => {
      if (success) {
        this.submit(article);
      } else {
        this.setState({ errors });
      }
    });
  }

  submit(article) {
     this.props
      .dispatch(articleAddRequest(article))
       .then(res => {
         this.props.history.push('/courses');
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
        <h1>Add</h1>
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

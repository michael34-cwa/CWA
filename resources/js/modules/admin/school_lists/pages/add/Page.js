// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { SchoolListAddRequest } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'
 
import { browserHistory } from 'react-router'
 class Page extends Component {
   static displayName = 'AddSchoolList'
  static propTypes = {
    school_list: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {  
    super(props)

    this.validator = new ReeValidate({
      email: "required|min:2|max:32", 
      schoolName: "required|min:2|max:32", 
      phone: 'required|min:2|max:20',  
      isActive: 'required',  
      schoolAddress: 'required|min:2|max:60',
      schoolDescription: 'required|min:2|max:200',
      password: 'required|min:6|max:32',
      passwordConfirmation: 'required|min:6|max:32'
    });
    
    const school_list = this.props.school_list.toJson()
    
    this.state = {
      school_list,
      errors: this.validator.errors,
      loading: false
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  componentWillReceiveProps(nextProps) {
    const school_list = nextProps.school_list.toJson()
    
    if (!_.isEqual(this.state.school_list, school_list)) {
      this.setState({ school_list })
    }
    
  }
  
  handleChange(name, value) {

    const { errors} = this.validator

    this.setState({ school_list: { ...this.state.school_list, [name]: value} })

    errors.remove(name) 
    if (name === 'passwordConfirmation') { 
       const result = this.validator.rules.confirmed(value, this.state.school_list.password); 
          if (!result) {
            this.validator.errors.add(name, 'Confirm password not matched with password');
          }
    } else  if(name === 'phone'){

    
     var no = this.formatPhoneNumber(value);
    
     this.setState({ school_list: { ...this.state.school_list, ['phone']: no} })
   
     if(! no.match(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)){
      this.validator.errors.add(name, 'US phone number not valid'); 
   }    
    } else {  
      this.validator.validate(name, value)
        .then(() => {
          this.setState({ errors })
        })
    } 
}
  
formatPhoneNumber(phone) {
  //normalize string and remove all unnecessary characters
  phone = phone.replace(/[^\d]/g, "");

  //check if number length equals to 10
  if (phone.length <= 10) {
      //reformat and return phone number
      return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }

   return this.state.school_list.phone;
}


  handleSubmit(e) {
  
    e.preventDefault()
    const school_list = this.state.school_list
    const { errors } = this.validator 
    this.validator.validateAll(school_list)
      .then((success) => {
        if (success) {
          this.submit(school_list)
        } else {
          this.setState({ errors })
        }
      })
  }
  
   submit(school_list) { 
    this.setState({ loading: true })
    this.props
      .dispatch(SchoolListAddRequest(school_list)) 
      .then(res => { 
        this.setState({ loading: false })
      this.props.history.push('/admin/school_lists');  
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
    
      <h1 className="text-center">Add School List</h1>
       <Form {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit} />
    </div></div></div>

  }
}

export default Page

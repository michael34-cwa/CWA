// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { AssignTaskListRequest, AssignTaskAddRequest, AssignTaskRemoveRequest, CourseTaskListRequest} from '../../service'
import { Button } from '@material-ui/core';
import LoadingComponent from '../../../../../common/loader'
// import components
import AssignTaskRow from './components/AssignTaskRow'
import Pagination from '../../../../../common/Pagination'
import Search from '../../../../../common/Search'
import { Link } from 'react-router-dom' 
 import DeleteModel from '../../../../../common/model/DeleteModel'
import AssignModel from '../../../../../common/model/SingleAssignModel'
import ReeValidate from 'ree-validate'  
 class Page extends Component { 
  static displayName = 'AssignTaskPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    assign_task: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

  //  this.togglePublish = this.togglePublish.bind(this);
    this.handleRemove = this.handleRemove.bind(this)
    this.pageChange = this.pageChange.bind(this)
    this.searchChange = this.searchChange.bind(this)
    this.openModel = this.openModel.bind(this) 
    this.openModelAss = this.openModelAss.bind(this) 
    this.state = { open: false, id: '', searchData: '', openAss:false  };
   // this.handleCloseModal = this.handleCloseModal.bind(this);


    this.validator = new ReeValidate({
      course_name: "required", 
    });
 
    this.state = {
      courseData: { course_name: '' },
      errors: this.validator.errors,
      loading: false
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  UNSAFE_componentWillMount() {
 
    const { match, assign_task, dispatch } = this.props
    let id  =   match.params.id;
   
    dispatch(AssignTaskListRequest({ id }))
    dispatch(CourseTaskListRequest({ id}))
  
  }

  pageChange = (event, pageNumber) => { 
    const value = this.state.searchData; 
    const { match, assign_task, dispatch } = this.props
    this.props.dispatch(AssignTaskListRequest({ pageNumber, value ,id})) 
  };
 
 
  handleChange(name, value) { 
    const { errors } = this.validator;
   
    this.setState({ courseData: { ...this.state.courseData, [name]: value } });

    this.validator.validate(name, value).then(() => {
      this.setState({ errors });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  
    const courseData = this.state.courseData;
 
    const { errors } = this.validator;
 
      this.validator.validateAll()
   
    this.validator.validateAll(courseData).then(success => {
      if (success) {
        this.submit(courseData);
      } else {
        this.setState({ errors });
      }
    });
  }

  submit(courseData) { 
    this.setState({ loading: true })
    const { match, assign_task, dispatch } = this.props
    let id = match.params.id;  
     this.props
       .dispatch(AssignTaskAddRequest(courseData, id)) 
       .then(res => {  

         dispatch(AssignTaskListRequest({ id }))  
         this.setState({ loading: false, openAss: false })   
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

  // togglePublish(id) {
  //   const school_list = this.props.school_list.find(school_list => school_list.user_id === id);

  //   if (!school_list) return;
  //   if (school_list.isActive) {
  //     school_list.isActive = 0;
  //   } else {
  //     school_list.isActive = 1;
  //   }
  //   this.props.dispatch(SchoolListUpdateRequest(school_list.toJson(), '1'));
  // }


  searchChange(name, value) {
    const { match, assign_task, dispatch } = this.props
    let id = match.params.id;
    if (value.length >= 2) { 
      this.setState({ searchData: value }) 
  
      this.props.dispatch(AssignTaskListRequest({ value, id })) 
    }else{
      this.setState({ searchData: '' }) 
      this.props.dispatch(AssignTaskListRequest({ id}))
    }
   
  }
  
  openModel(id) { 
    this.setState({ open: !this.state.open, id: id }) 
  }


   openModelAss() {  
     const { errors } = this.validator;
     this.setState({ courseData: { ...this.state.courseData, ['course_name']: '' } });
      
     this.validator.validate('course_name', '1').then(() => {
       this.setState({ errors });
     });
     
     this.setState({ openAss: !this.state.openAss })
   }


   handleRemove(ids) {
     const { match, assign_task, dispatch } = this.props
     let id = match.params.id;
    this.setState({ open: !this.state.open, id: ''  }) 
     this.props.dispatch(AssignTaskRemoveRequest(ids)) 
     this.props.dispatch(AssignTaskListRequest({ id }))
  }

  renderSchoolList(pageNo) { 
   
    return this.props.assign_task.map((assignTask, index) => {
      
      return <AssignTaskRow key={index}
         assignTask={assignTask}
          pageNo={pageNo++}
          index={index}
            togglePublish={this.togglePublish}
          openModel={this.openModel}
            handleRemove={this.handleRemove} />
    
    })

  }
  render() {
    console.log('this.props.task_list')
    console.log(this.props.task_list )
    return (
      <main className="dashboard-right" role="main">
        <LoadingComponent isLoading={this.props.meta.loading} error={''} /> 
        <div className="card">
          <div className="card-body bg-white">
            <h1 class="text-center">Assign Tasks</h1>
            <div className="table-responsive">
              <Search onChange={this.searchChange} /> 
              <table className="table  table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th> 
                    <th>Task Name</th> 
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th>Status</th>
                    <th> 
                      {/* <Link to="/admin/school_lists/create">
                        <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                          <i class="fa fa-plus" aria-hidden="true"></i> Assign Course
                        </Button >
                      </Link>  */}
                      {this.state.openAss &&   <AssignModel 
                        {...this.state}
                        openAss={this.state.openAss}
                        name={'Task'}
                        openModelAss={this.openModelAss}
                        loading={this.state.loading}
                        courses={this.props.task_list} 
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}/> }

                      <Button
                        onClick={this.openModelAss}
                        size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                        <i class="fa fa-plus" aria-hidden="true"></i> Assign Task
                      </Button >
                    </th>
                  
                  </tr>

                </thead>
                <tbody>
                  {this.props.assign_task.length >= 1 ? this.renderSchoolList(this.props.meta.from) : <tr> <td colspan="10" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}</tbody>
              </table>
            </div>
            <Pagination meta={this.props.meta} onChange={this.pageChange} />
            {this.state.open && <DeleteModel openModel={this.openModel} opens={this.state.open} ids={this.state.id} handleRemove={this.handleRemove} />}

           </div>
        </div> 
          </main>
    );
  }
}

export default Page

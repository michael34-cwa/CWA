// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { LogsListRequest } from '../../service'
import { Button } from '@material-ui/core';
import LoadingComponent from '../../../../../common/loader'
// import components
import AssignCourseRow from './components/AssignCourseRow'
import Pagination from '../../../../../common/Pagination'
import Search from '../../../../../common/Search'
import { Link } from 'react-router-dom' 
 import DeleteModel from '../../../../../common/model/DataModel'
 import ReeValidate from 'ree-validate' 
 class Page extends Component { 
  static displayName = 'AssignCoursePage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    assign_student: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

  //  this.togglePublish = this.togglePublish.bind(this);
    this.handleRemove = this.handleRemove.bind(this)
    this.pageChange = this.pageChange.bind(this)
    this.searchChange = this.searchChange.bind(this)
    this.openModelAss = this.openModelAss.bind(this) 
    this.openModel = this.openModel.bind(this) 
   // this.setState({ open: !this.state.open, id: ''  }) 
    this.state = { open:false ,openAss: false, datas: '',type:'', searchData: '', type:false  };
   // this.handleCloseModal = this.handleCloseModal.bind(this);


 
 
 
  }

  UNSAFE_componentWillMount() {
 
    const { match, assign_student, dispatch } = this.props
    let id  =   match.params.id;  
    dispatch(LogsListRequest({ id }))  

  }

  pageChange = (event, pageNumber) => { 
    const value = this.state.searchData; 
    const { match, assign_student, dispatch } = this.props
    this.props.dispatch(LogsListRequest({ pageNumber, value ,id})) 
  };
 
 

  openModelAss() {   
    const { errors } = this.validator;
    this.setState({ courseData: { ...this.state.courseData, ['course_name']: '' ,['task_name']: '' ,['name']: '' } });
    
    this.setState({ openAss: !this.state.openAss })
  }

 
  searchChange(name, value) {
    const { match, assign_student, dispatch } = this.props
    let id = match.params.id;
    if (value.length >= 2) { 
      this.setState({ searchData: value }) 
  
      this.props.dispatch(LogsListRequest({ value, id })) 
    }else{
      this.setState({ searchData: '' }) 
      this.props.dispatch(LogsListRequest({ id}))
    }
   
  }
  
  openModel(datas,type) {
  
    this.setState({ open: !this.state.open, datas: datas , type: type }) 
  }


   handleRemove(ids) {
     const { match, assign_student, dispatch } = this.props
     let id = match.params.id;
    this.setState({ open: !this.state.open, id: ''  }) 
     this.props.dispatch(AssignCourseRemoveRequest(ids)) 
     this.props.dispatch(AssignCourseListRequest({ id }))
  }

  renderSchoolList(pageNo) { 
   
    return this.props.log_lists.map((assignCourse, index) => {
      
      return <AssignCourseRow key={index}
        assignCourse={assignCourse}
          pageNo={pageNo++}
          index={index}
            togglePublish={this.togglePublish}
          openModel={this.openModel}
            handleRemove={this.handleRemove} />
    
    })

  }
  render() {

    return (
      <main className="dashboard-right" role="main">
        <LoadingComponent isLoading={this.props.meta.loading} error={''} /> 
        <div className="card">
          <div className="card-body bg-white">
          <Button
          
          onClick={(e) => this.props.history.goBack()}
                size="small" variant="contained" className="colorPrimary text-capitalize mb-2"  >
                Back
    </Button > 
            <h1 class="text-center">Time Logs</h1>
            <div className="table-responsive">
              <Search onChange={this.searchChange} /> 
              <table className="table  table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th> 
                    <th>Task Name</th>
                    <th>Translation</th> 
                    <th>Logs Discription</th> 
                    <th>Created Date</th>
                    <th>Updated Date</th>
                 
                  </tr>

                </thead>
                <tbody>
                  {this.props.log_lists.length >= 1 ? this.renderSchoolList(this.props.meta.from) : <tr> <td colspan="10" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}
                  
                  </tbody>
              </table>
            </div>
            <Pagination meta={this.props.meta} onChange={this.pageChange} />
            {this.state.open && 
            
         //  this.state.datas.map((assignCourse, index) => {
            <DeleteModel 
            {...this.state}
            openModel={this.openModel} 
            opens={this.state.open}
            type={this.state.type}
             data={ this.state.datas}  
            />  
          
      //    })
          }

           </div>
        </div> 
          </main>
    );
  }
}

export default Page

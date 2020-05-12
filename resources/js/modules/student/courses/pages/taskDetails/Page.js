// import libs
import React, { Component } from 'react'
import { taskDetailsRequest, courseEditRequest, taskStatusRequest,taskDisRequest,chatListRequest,chatAddRequest,taskTimeRequest ,logsListRequest,taskTimeUpdate,taskTransRequest} from '../../service'
import { Button } from '@material-ui/core';
import StatusModel from '../../../../../common/model/StatusModel'
import RejectModel from '../../../../../common/model/RejectModel'
import LoadingComponent from '../../../../../common/loader'
import ChatBox from '../../../../../common/model/ChatBox'
import TaskTab from '../../../../../common/model/TaskTab'
import ReactPlayer from 'react-player'
import Duration from './Duration'
// import components
import TaskRow from './components/TaskRow'
import Form from './components/Form'
import LogsRow from './components/LogsRow'
import TextForm from './components/TextForm'

import ReeValidate from 'ree-validate'  
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Page extends Component {

  constructor(props) {
    super(props)
  
    this.togglePublish = this.togglePublish.bind(this);
    this.openModelAss = this.openModelAss.bind(this)
    this.backBtn = this.backBtn.bind(this)

    this.validator = new ReeValidate({
      description: "required|min:2|max:500", 
      chat: "required|min:2|max:500", 
      start_time: "required", 
      end_time: "required", 
      vid_disc: "min:2|max:800", 
    });

    this.validatorT = new ReeValidate({ 
      start_time: "required", 
      end_time: "required", 
      vid_disc: "min:2|max:800", 
    });  
    // const course = this.props.course.toJson()
 
     const logTime = this.props.logTime
    const chat = this.props.chat
    this.state = {
      errors: this.validator.errors,
      errorst: this.validatorT.errorst,
       loading: false,
      chatVal: { chat:''},
      logeid: '',
       logData: { start_time:'' , end_time: '',vid_disc:''},
      chat,
      logTime,
      status : '',
      taskData: '',
      openAss: false 
      ,openCan: false
    };


    

     this.openModelCan = this.openModelCan.bind(this)

     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  
    this.handleSubmitChat = this.handleSubmitChat.bind(this);
     this.handleChangeChat = this.handleChangeChat.bind(this);

     this.handleChangeTime = this.handleChangeTime.bind(this);
     this.handleSubmitTime = this.handleSubmitTime.bind(this);

     this.handleChangeTimeUp = this.handleChangeTimeUp.bind(this);
     
     this.handleSubmitTimeUp = this.handleSubmitTimeUp.bind(this);

     this.handleChangeTab = this.handleChangeTab.bind(this);

     this.handleChangeTrans = this.handleChangeTrans.bind(this);

     this.handleSubmitTrans = this.handleSubmitTrans.bind(this);

     
     this.editLog = this.editLog.bind(this);
  }

  UNSAFE_componentWillMount() {

    this.loadCourse()

  }

  backBtn(){
    this.props.history.goBack(); 
  }

  loadCourse() {
    const { match, course, dispatch,chat } = this.props 
    let id = match.params.tid
    let sid = match.params.sid
    let tid = match.params.id  
      

     
    dispatch(courseEditRequest(id,sid))
    
 
    // let schoolId = this.props.course.schoolId;
    // let taskid = this.props.course.id;
    //dispatch(chatListRequest(tid,id));
  }

  componentDidMount() {
  
    const { match, course, dispatch,chat,user } = this.props 
    let id = match.params.cid
    let sid = match.params.sid
    let tid = match.params.tid  
    // let schoolId = this.props.course.schoolId;
    // let taskid = this.props.course.id;
 
    // alert(window.atob(id))
    // alert(window.atob(sid))
    // alert(window.atob(tid))
    // this.interval = setInterval(() => dispatch(chatListRequest(this.props.course.id,this.props.course.schoolId,user.id))
    // , 2000);
   // let tid = this.props.course.taskId; 
    dispatch( logsListRequest(tid) );
   
   
 
 
  }
 
  componentWillUnmount() { 
   // logsListRequest(this.props.course.id,this.props.course.schoolId);
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const logTime = nextProps.logTime
    this.setState({ logTime })

   

   if(this.state. taskData  && nextProps.tasks){   

    let taskOne = nextProps.tasks.find(course => course.id == this.state.taskData.id)

      //   let tid = nextProps.tasks ? nextProps.tasks[0].id : '';
      //  this.props.dispatch( logsListRequest(tid) ); 
//     if (!_.isEqual(this.state.taskData, taskOne )) {      console.log('bb')

//       const taskOne = nextProps.tasks ? nextProps.tasks[0] : '';
//       let tid = this.state.taskData.id
//       this.props.dispatch( logsListRequest(tid) ); 
//       this.setState({ taskData:taskOne })
//       this.setState({ logTime })
//  }
   }else{
   
 
     
   const taskOne = nextProps.tasks ? nextProps.tasks[0] : '';
   const logTime = nextProps.logTime
   this.setState({ taskData:taskOne })
   if(taskOne){
         let tid = taskOne.id
     this.props.dispatch( logsListRequest(tid) ); 
   }
  //  this.setState({ logTime })
  }



  

   // if (!_.isEqual(this.state.logTime, logTime)) {
  //  }

  }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // const course = nextProps.course.toJson()

  //   // if (!_.isEqual(this.state.course, course)) {
  //   //   this.setState({ course })
  //   // }

  // }



  togglePublish = (id) => {
    this.props.dispatch(taskStatusRequest(id))

      .then(res => {
        const course = this.props.course;
        course.status = res.data.status;
        this.setState({ openAss: !this.state.openAss })
      });
  }

  editLog = (id) => {
    this.setState({logeid:id})

    
   let data = this.props.logData.find(Logs => window.atob(Logs.id) == window.atob(id))
     
   this.setState({ start_time:data.startTime , end_time:  data.endTime, vid_disc:  data.vidDisc})
 
  }

  


  openModelAss() {

    this.setState({ openAss: !this.state.openAss })
  }


  scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
    //this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  openModelCan() {  

    // const { errors } = this.validator;
    // this.setState({ course: { ...this.state.course, ['description']: '' } });
 
    // this.validator.validate('description', '1').then(() => {
    //   this.setState({ errors });
    // });
    
    this.setState({ openCan: !this.state.openCan })
  }

  componentWillReceiveProps(nextProps) {
    const course = nextProps.course.toJson()
    
    if (!_.isEqual(this.state.course, course)) {
      this.setState({ course })
    }
    
  }

  componentWillReceiveProps(nextProps) {
    const { logTime } = this.props
      if (nextProps.logTime !== logTime) {
   let dee = nextProps.logTime
       this.setState({ logTime:dee })
     }
 
    }

  handleChangeTimeUp(name, value) { 
    const elementsIndex = this.state.logTime.findIndex(element => element.id == name )
    let newArray = [...this.state.logTime]
   
    newArray[elementsIndex] = {...newArray[elementsIndex], vidDisc: value}

    this.setState({
      logTime: newArray,
      }); 
   }

   handleSubmitTimeUp = function (e) {
    
    e.preventDefault();
    const logData = this.state.logTime;

    this.submitTimeUp(logData);

}

 


submitTimeUp(logData) { 
    this.setState({ loading: true })
    const { match , dispatch } = this.props
    let id = match.params.tid;  
      this.props
       .dispatch(taskTimeUpdate(logData, id)) 
       .then(res => {  
    //   dispatch(logsListRequest(tid))
   
       this.setState({ loading: false})   
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


  handleChangeTrans(name, value) { 
   
    console.log(this.state.taskData)
    this.setState({ taskData: { ...this.state.taskData, ['translate']: value} })

   }

   handleSubmitTrans(e) {  
    e.preventDefault(); 
    const taskData = this.state.taskData;
    this.setState({ loading: true })
    const { match , dispatch } = this.props
    let id =  this.state.taskData.id;  
    let tid =  this.state.taskData.id;  
 
      this.props
       .dispatch(taskTransRequest(taskData, id)) 
       .then(res => {  
       
         this.setState({ loading: false})   
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


  handleChangeTime(name, value) { 
   
 
    const { errors} = this.validator

   this.setState({ logData: { ...this.state.logData, [name]: value} })

   errors.remove(name)
    
   if(name === 'start_time'){ 
  
    this.setState({ logData: { ...this.state.logData, ['start_time']: value} })
  
    if(! value.match(/^(0?[1-9]|1[0-2]):[0-5][0-9]$/)){
     this.validator.errors.add(name, 'Start time not valid'); 
  } 
}else if(name === 'end_time'){

  this.setState({ logData: { ...this.state.logData, ['end_time']: value} })
  
    if(! value.match(/^(0?[1-9]|1[0-2]):[0-5][0-9]$/)){
     this.validator.errors.add(name, 'End time not valid'); 
    }
} else {  
  this.validator.validate(name, value)
    .then(() => {
      this.setState({ errors })
    })
} 


 
  }


  handleSubmitTime(e) {  
    e.preventDefault();
   
    const logData = this.state.logData;
     const { errors } = this.validator;
  
    this.validator.validateAll() 
  //  this.submitTime(course);
    this.validator.validateAll(logData).then(success => {
      if (success) {  
       this.submitTime(logData);
      } else {
        this.setState({ errors });
      }
    });
  }



  submitTime(logData) { 
    this.setState({ loading: true })
    const { match , dispatch } = this.props
    let id =  this.state.taskData.id;  
    let tid =  this.state.taskData.id;  
 
      this.props
       .dispatch(taskTimeRequest(logData, id)) 
       .then(res => {  
      dispatch(logsListRequest(tid))
      
         this.setState({ loading: false,logData: { start_time:'' , end_time: '',vid_disc:''}  })   
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



  handleChangeChat(name, value) { 
   
 
    const { errors} = this.validator

   this.setState({ chatVal: { ...this.state.chatVal, [name]: value} })

    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
       
        this.setState({ errors })
      })
  }

  handleSubmitChat(e) {
    e.preventDefault();
  
    const chatVal = this.state.chatVal;
     const { errors } = this.validator;
 
    // this.validator.validateAll(chatVal)

    this.validator.validateAll(chatVal).then(success => {
      if (success) {  handleChangeTime
       this.submitChat(chatVal);
      } else {
        this.setState({ errors });
      }
    });
  }


  submitChat(chatVal) { 
    this.setState({ loading: true })
    const { match , dispatch } = this.props
 //  let id = match.params.cid;  
    // let sid = match.params.sid;  
    let schoolId = this.props.course.schoolId;
   let taskid = this.props.course.id;

   let id = match.params.cid
    let tid = match.params.id  

     this.props
       .dispatch(chatAddRequest(chatVal, taskid,schoolId)) 
       .then(res => {  
      //  dispatch(courseEditRequest(id, sid))
    //  dispatch(chatListRequest(tid,id))
      this.scrollToBottom();
     
         this.setState({ loading: false,  chatVal: { chat:''}})   
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


  handleChange(name, value) { 
  
    const { errors} = this.validator

   this.setState({ course: { ...this.state.course, [name]: value} })

 
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
       
        this.setState({ errors })
      })
  }

  handleSubmit(e) {
    e.preventDefault();
  
    const course = this.state.course;
     const { errors } = this.validator;
 
      this.validator.validateAll()
   
    this.validator.validateAll(course).then(success => {
      if (success) {
        this.submit(course);
      } else {
        this.setState({ errors });
      }
    });
  }

  submit(course) { 
    this.setState({ loading: true })
    const { match , dispatch } = this.props
    let id = match.params.cid;  
    let sid = match.params.sid;  
     this.props
       .dispatch(taskDisRequest(course, id)) 
       .then(res => {  
        dispatch(courseEditRequest(id, sid))
      
         this.setState({ loading: false, openCan: false })   
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


  // renderList() {
    
  //   const { taskDatas} = this.props

  //   if (taskDatas.id) {
  //     return <TaskRow
  //       course={taskDatas} 
  //     />
  //   }
  // }


  // renderChat() {
  //   const { chat, user, course } = this.props
  //   let schoolId =  window.atob(course.schoolId);
  //  let taskid =    window.atob(course.id);
  //   var jwt = require('jwt-simple');
  // var payload = { usr:user.firstName,task:schoolId+'_'+taskid };
  //  var secret = 'sddsd322343esfsfsdf233423efsdc';
    
  //   var token = jwt.encode(payload, secret);
  //   return <ChatBox 
  //   {...this.state}
  //                       loading={this.state.loading} 
  //                       token={token} 
  //                       chats={chat} 
  //                       school={this.props.course.schoolId}
  //                       chatValue={this.state.chatVal}   
  //                       user={user}  
  //                       onChange={this.handleChangeChat  }
  //                       onSubmit={this.handleSubmitChat}/>

  // }

  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }
  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }


  handlePause = () => {
    var timestamp = this.state.duration *  this.state.played;
   
   var time = this.myTime(timestamp);
 this.setState({ playing: false ,logData: { start_time:'0.00' , end_time:  time, vid_disc:this.state.logData.vid_disc}})
      
  }

//   componentWillUnmount(prevProps, prevState,snapshot){
//     console.log(snapshot);
//  if(prevProps.logTime.length > 0){
//  // this.setState({ logsAll:  this.props.logTime })  
//  }
//   };


  myTime (seconds) {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = this.pad(date.getUTCSeconds())
  if (hh) {
    return `${hh}:${this.pad(mm)}:${ss}`
  }
  return `${mm}:${ss}`
}

 pad (string) {
  return ('0' + string).slice(-2)
}
 
handleChangeTab(newValue){
   const {  dispatch ,tasks} = this.props 
  //  dispatch(taskDetailsRequest(newValue))
  let taksDataLis = tasks.find(task => task.id == newValue)
 
  this.setState({ taskData:taksDataLis })
let tid= newValue;
dispatch( logsListRequest(tid) );
 
}

renderLogs() {

  return this.state.logTime.map((logs, index) => {
    return (
      <LogsRow
      {...this.state.logTime}
      index={index}
        logs={logs}  
        editLog={this.editLog} 
        onChange={this.handleChangeTimeUp} 
        togglePublish={this.togglePublish} 
      />
    );
  });
}

  render() {

    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state

    const { course, user ,chat,logTime} = this.props
    const {taskData } = this.state
 
console.log(this.state.taskData)
 
      return <main className="dashboard-right student-dash-right" role="main">
      <Button
                    onClick={this.backBtn}
                    size="small" variant="contained" className="colorPrimary text-capitalize mb-2"  >
                    Back
        </Button > 
      <div class="card"><div class="card-body bg-white card-tabs-page">
    
 
        {
          this.props.tasks ? 
          <TaskTab 
          tasks={this.props.tasks}
          handleChangeTab={this.handleChangeTab}
          /> 
         
          : "No Task Found"
        }

<div class="taskdetailssec">
	<div class="top-contentsection">
	<h2>Task details</h2>
  <p dangerouslySetInnerHTML={{ __html:  taskData ?  taskData.getTask.taskDescription : '' }} /> 

 </div>
<div class="twocolumsec row">
	<div class="leftvideoandform col-md-8">
		<div class="taskvideo">
    { taskData ?  <ReactPlayer
                  url={taskData.getTask.link}
                className='react-player'
                //  width='100%'
                //  height='500%'
                 onPlay={this.handlePlay}
                 onDuration={this.handleDuration}
                 playing={playing}
                 onProgress={this.handleProgress}
                 onPause={this.handlePause}
     />  : ''}
 	</div>
	<div class="taskform">
  <Form
          {...this.state} 
          onChange={this.handleChangeTime}
          onSubmit={this.handleSubmitTime}
          logData={this.state.logData}
         />
	</div>

	</div>
	<div class="righttextarea col-md-4">
		<h2>Completed Transcription</h2>
 
				<div  class="formrightmanin pt-2">

        <form onSubmit={this.handleSubmitTimeUp}  >
         
         {this.state.logTime.length >= 1 ? this.renderLogs() :<div className='nodata'>No Data Found</div>}  



      
          <div className="form-group">
       <div className="ml-auto">
       {this.state.logTime.length >= 1 ?     <Button 
         variant="contained"
      //   disabled={errors.any()}
         type="submit"
         className="text-capitalize colorPrimary"
         disableElevation
       >
         <i className="fa fa-plus mr-2" aria-hidden="true"></i>  Update Time
       </Button> : "" }
         
    
       </div>
     </div>
                </form>

		 
			</div>
		  
      
		
 
                
			{this.state.taskData ? this.state.taskData.getTask.isActive == 1 ?	<div  class="formrightmanin pt-2">
      <h2>Completed Translation</h2>
         <TextForm
          {...this.state} 
          onChange={this.handleChangeTrans}
          onSubmit={this.handleSubmitTrans}
          translate={ this.state.taskData.translate}
         />
		 
			</div> : '' : ''}
		 
	</div>
</div>
</div>


{/* <div class="maintasksec">

<div class="taskdescripsec">
  <div dangerouslySetInnerHTML={{ __html:  taskData ?  taskData.getTask.taskDescription : '' }} /> 

 </div>


 
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
     { taskData ?  <ReactPlayer
                  url={taskData.getTask.link}
                className='react-player'
                //  width='100%'
                //  height='500%'
                 onPlay={this.handlePlay}
                 onDuration={this.handleDuration}
                 playing={playing}
                 onProgress={this.handleProgress}
                 onPause={this.handlePause}
     />  : ''}
        </div>
        <div class="translationadd">
        <Form
          {...this.state} 
          onChange={this.handleChangeTime}
          onSubmit={this.handleSubmitTime}
          logData={this.state.logData}
         />
        </div>
    </div>
    <div class="blocksec2">
        <div class="completed-translation">
        <form onSubmit={this.handleSubmitTimeUp}  >
         
          {this.state.logTime.length >= 1 ? this.renderLogs() : <tr> <td colspan="5" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}  

 

                 <div className="form-group row">
        <div className="col-md-12 ml-auto">
        <Button 
          variant="contained"
       //   disabled={errors.any()}
          type="submit"
          className="text-capitalize colorPrimary"
          disableElevation
        >
          <i className="fa fa-plus mr-2" aria-hidden="true"></i>  Update Time
        </Button>
          
     
        </div>
      </div>
                 </form>
        </div>
    </div>
    <div class="blocksec3">
        <div class="completed-translation">
            Completed Translation
        </div>
    </div>
</div>
</div> */}
        {/* <a target="_blank" href={"/file_manager/"+course.id}>

        <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1" onClick={this.pageChange}  >
          Start Now
         </Button >
         </a> */}


        {this.state.openAss && <StatusModel
          openAss={this.state.openAss}
          openModelAss={this.openModelAss}
          taskId={course.taskId}
          title={'Task Confirmation'}
          discription={'Are you sure want to complete task ?'}
          togglePublish={this.togglePublish}

        />}
 
{/* {this.state.openCan &&   <RejectModel 
                        {...this.state}
                        openCan={this.state.openCan}
                        openModelCan={this.openModelCan}
                        loading={this.state.loading} 
                        course={this.state.course} 
                        
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}/> }
        {
          user.rolename == 'student' ? course.status == 0 ? (

            <Button
              onClick={this.openModelAss}
              size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
              Complete
            </Button >
          ) :
            course.status == 1 ? (

              <span class="badge badge-primary">Completed</span>
            ) : (
                <span class="badge badge-primary">Completed</span>

              ) : ''
        } */}


        {/* {
          user.rolename == 'teacher' && course.status == 1 ? (
            <div class="panel-footer row"> 
              <div class="col-xs-6 text-left">
                <div class="previous">
                  <Button
                    onClick={this.openModelAss}
                    size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                    Approve
        </Button >  </div></div>
  
              <div class="col-xs-6 text-right">
                <div class="next">
                  <Button
                    onClick={this.openModelCan}
                    size="small" variant="contained" className="colorDanger text-capitalize mx-1"  >
                    Reject
          </Button >
                </div>
              </div>
            </div>


          ) : course.status == 2  && user.rolename == 'teacher' &&           
              <span class="badge badge-primary">Completed</span>



        } */}

   {/* { user.rolename == 'student' && course.description != null &&  course.description }
        {/* {this.renderList()} */}
      </div> 

    
      </div>
      
      <div className="container-fluid">
<div className="row">
            <div className="col-xs-12">
              <div className="embedded-video-wrapper">
              
                   
              </div>
      
            </div>
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <div className="completed-transcription-wrapper">
            



  
                  </div>
                </div>
                
              </div>  
            </div>
            {/* {this.renderChat()} */}
          </div>
          </div>
    </main>
  }
}

export default Page

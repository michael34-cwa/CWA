// import libs
import React, { Component } from 'react'
import { taskDetailsRequest, courseEditRequest, taskStatusRequest,taskDisRequest,chatListRequest,chatAddRequest,taskTimeRequest } from '../../service'
import { Button } from '@material-ui/core';
import StatusModel from '../../../../../common/model/StatusModel'
import RejectModel from '../../../../../common/model/RejectModel'
import LoadingComponent from '../../../../../common/loader'
import ChatBox from '../../../../../common/model/ChatBox'
import ReactPlayer from 'react-player'
import Duration from './Duration'
// import components
import TaskRow from './components/TaskRow'
import Form from './components/Form'

import ReeValidate from 'ree-validate'  

class Page extends Component {

  constructor(props) {
    super(props)
  
    this.togglePublish = this.togglePublish.bind(this);
    this.openModelAss = this.openModelAss.bind(this)
    this.backBtn = this.backBtn.bind(this)

    this.validator = new ReeValidate({
      description: "required|min:2|max:500", 
      chat: "required|min:2|max:500", 
    });

    this.validatorT = new ReeValidate({ 
      start_time: "required", 
      end_time: "required", 
      vid_disc: "min:2|max:800", 
    });  
    const course = this.props.course.toJson()
    const chat = this.props.chat
    this.state = {
      errors: this.validator.errors,
      errorst: this.validatorT.errorst,
       loading: false,
      taskDis: { description:''},
      chatVal: { chat:''},
      course,
      chat,
      status : '',
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

  }

  UNSAFE_componentWillMount() {

    this.loadCourse()

  }

  backBtn(){
    this.props.history.goBack(); 
  }

  loadCourse() {
    const { match, course, dispatch,chat } = this.props 
    let id = match.params.cid
    let sid = match.params.sid
    let tid = match.params.id  
      

     
    dispatch(courseEditRequest(id, sid))
    
 
    let schoolId = this.props.course.schoolId;
    let taskid = this.props.course.id;
    //dispatch(chatListRequest(tid,id));
  }

  componentDidMount() {
  
    const { match, course, dispatch,chat,user } = this.props 
    let id = match.params.cid
    let sid = match.params.sid
    let tid = match.params.id  
    let schoolId = this.props.course.schoolId;
    let taskid = this.props.course.id;
 
    this.interval = setInterval(() => dispatch(chatListRequest(this.props.course.id,this.props.course.schoolId,user.id))
    , 2000);
 
  }
 
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  

  UNSAFE_componentWillReceiveProps(nextProps) {
    const course = nextProps.course.toJson()

    if (!_.isEqual(this.state.course, course)) {
      this.setState({ course })
    }

  }



  togglePublish = (id) => {
    this.props.dispatch(taskStatusRequest(id))

      .then(res => {
        const course = this.props.course;
        course.status = res.data.status;
        this.setState({ openAss: !this.state.openAss })
      });
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


  handleChangeTime(name, value) { 
   
 
    const { errorst} = this.validatorT

   this.setState({ course: { ...this.state.course, [name]: value} })

   errorst.remove(name)
    
    this.validatorT.validate(name, value)
      .then(() => {
       
        this.setState({ errorst })
      })
  }


  handleSubmitTime(e) {  
    e.preventDefault();
   
    const course = this.state.course;
     const { errors } = this.validator;
 
   //  this.validator.validateAll() 
   this.submitTime(course);
    // this.validator.validateAll(course).then(success => {
    //   if (success) {  
    //    this.submitTime(course);
    //   } else {
    //     this.setState({ errors });
    //   }
    // });
  }



  submitTime(course) { 
    this.setState({ loading: true })
    const { match , dispatch } = this.props
    let id = match.params.cid;  
    let sid = match.params.sid;  
     this.props
       .dispatch(taskTimeRequest(course, id)) 
       .then(res => {  
    //    dispatch(courseEditRequest(id, sid))
      
         this.setState({ loading: false })   
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
      if (success) {  
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


  renderList() {
    const { course } = this.props

    if (course.id) {
      return <TaskRow
        course={course}
      />
    }
  }


  renderChat() {
    const { chat, user, course } = this.props
    let schoolId =  window.atob(course.schoolId);
   let taskid =    window.atob(course.id);
    var jwt = require('jwt-simple');
  var payload = { usr:user.firstName,task:schoolId+'_'+taskid };
   var secret = 'sddsd322343esfsfsdf233423efsdc';
    
    var token = jwt.encode(payload, secret);
    return <ChatBox 
    {...this.state}
                        loading={this.state.loading} 
                        token={token} 
                        chats={chat} 
                        school={this.props.course.schoolId}
                        chatValue={this.state.chatVal}   
                        user={user}  
                        onChange={this.handleChangeChat  }
                        onSubmit={this.handleSubmitChat}/>

  }

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
 this.setState({ playing: false ,course: { start_time:'0.00' , end_time:  time}})
      
  }


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
 

  render() {
    const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state

    const { course, user ,chat} = this.props
    
     return <main className="dashboard-right" role="main">
      <Button
                    onClick={this.backBtn}
                    size="small" variant="contained" className="colorPrimary text-capitalize mb-2"  >
                    Back
        </Button > 
      <div class="card"><div class="card-body bg-white">
    
        <h1>Task Details</h1>
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
 
{this.state.openCan &&   <RejectModel 
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
        }


        {
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



        }

   { user.rolename == 'student' && course.description != null &&  course.description }
        {this.renderList()}
      </div>

    
      </div>
      
      <div className="container-fluid">
<div className="row">
            <div className="col-xs-12">
              <div className="embedded-video-wrapper">
                <h4>1-Embedded Video</h4>
                <ReactPlayer
                 url={course.link}
                //  className='react-player'
                //  width='100%'
                //  height='500%'
                 onPlay={this.handlePlay}
                 onDuration={this.handleDuration}
                 playing={playing}
                 onProgress={this.handleProgress}
                 onPause={this.handlePause}
                    />
                      <table>
            <tbody>
              <tr> 
         
                       <td>{playing ? 'true' : 'false'}</td>
                       </tr>
                       
                       <tr>
                <th>duration</th>
                <td><Duration seconds={duration} /></td>
              </tr>
              <tr>
                <th>elapsed</th>
                <td><Duration seconds={ this.state.duration *  this.state.played} /></td>
              </tr>
              <tr>
                <th>remaining</th>
                <td><Duration seconds={duration * (1 - played)} /></td>
              </tr>
                       </tbody></table>
              </div>
              {/* <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="timer-wrapper">
                    <h4>2-Timer</h4>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-8">                  
                  <div className="timer-editor-wrapper">
                    <h4>3-Transcriber-Editing box with timer</h4>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-12">
                  <div className="completed-transcription-wrapper">
                    <h4>4-Completed Transcription</h4>

               <Form
          {...this.state} 
          onChangeTime={this.handleChangeTime}
          onSubmit={this.handleSubmitTime}
          course={this.state.course}
        />
                  </div>
                </div>
                {/* <div className="col-xs-12 col-md-5">
                  <div className="twillo-videochat-1-wrapper">
                    <h4>Twillo Video Chat 1</h4>
                  </div>
                  <div className="twillo-videochat-2-wrapper">
                    <h4>Twillo Video Chat 2</h4>
                  </div>
                  <div className="mainChat-wrapper">
                  
                  </div>
                </div> */}
              </div>  
            </div>
            {this.renderChat()}
          </div>
          </div>
    </main>
  }
}

export default Page

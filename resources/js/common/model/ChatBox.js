import React, { useState } from 'react';
import PropTypes from 'prop-types'
import LoadingComponent from '../loader'
import { TextField, Button } from '@material-ui/core';
const propTypes = {
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  opens: PropTypes.boolean,
}



const ChatBox = ({ loading,token, chats,school,chatValue, user, errors, onChange, onSubmit }) => {
  function handleChange(name, value) {

    onChange(name, value)

  }

  let last = chats[chats.length - 1];


if(last){

//   console.log(last.schoolId);
// console.log(window.atob(school));
// console.log(user.id);
// console.log(last.senderId);
// console.log('last.senderId');


  if(window.atob(school) == last.schoolId && user.id != last.senderId &&  localStorage.getItem("lastname") == 1){
    window.scrollTo(0, document.body.scrollHeight)
    localStorage.setItem("chatread", 0);
  }
}
  return (
  
  

   <div class="container ">
    <div class="chat-log">
      {/* <div class="chat-log__item chat-log__item--own">
        <h3 class="chat-log__author">Felipe <small>14:30</small></h3>
        <div class="chat-log__message">Yo man</div>
      </div> */}
{  
     chats.map((chat, index) => {
      let curruser = user.id == chat.senderId ? '' : 'chat-log__item--own';
      return   <div class={'chat-log__item'+' '+ curruser }>
        <h3 class="chat-log__author">{chat.name} <small>{chat.createdAt && chat.createdAt.format("MMMM, DD YYYY h:sa")} </small></h3>
        <div class="chat-log__message">{chat.message} </div>
      </div>
    })
}

    </div>

  <div class="chat-form">
     <form onSubmit={e => onSubmit(e)}>
        <div class="row">
          <div class="col-sm-10 col-xs-8">

          <TextField
         error={errors.has("chat")} 
          label="Chat"
          style={{ margin: 8 }}
          helperText={`${errors.has("chat") ? errors.first("chat").replace("chat", "chat") : ''}`}
          value={ chatValue.chat}
          id="chat"
          name="chat"
          onChange={e => handleChange(e.target.name, e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />


 
            {/* <input type="text" class="form-control" id="" placeholder="Message" /> */}
          </div>
          <div class="col-sm-10 col-xs-8">
          <Button
            variant="contained"
           disabled={errors.any()}
            type="submit"
            className="text-capitalize colorPrimary"
            disableElevation 
         >Send</Button>
      <Button
            variant="contained" 
            className="text-capitalize colorPrimary"
          >
<a target="_blank"  href={'https://chat.maykilscorner.com/?token='+token}>video chat</a>
</Button>
          </div>
        </div>
      </form>
    </div>
    {<LoadingComponent isLoading={loading} error={''} />}
    </div>
 
 

  );
}
ChatBox.propTypes = propTypes
export default ChatBox;
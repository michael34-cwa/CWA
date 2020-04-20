import React, { useState } from 'react';
import PropTypes from 'prop-types'
import LoadingComponent from '../loader'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
const propTypes = {
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  opens: PropTypes.boolean,
}



const ChatBox = ({ loading,token, chats, user, errors, onChange, onSubmit }) => {
  function handleChange(name, value) {

    onChange(name, value)

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
      let curruser = user.id === chat.senderId ? 'chat-log__item--own' : '';
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
      //     error={errors.has("chat")} 
          label="Chat"
          style={{ margin: 8 }}
        //  helperText={`${errors.has("chat") ? errors.first("chat").replace("chat", "chat") : ''}`}
          value={ ""}
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
        //    disabled={errors.any()}
            type="submit"
            className="text-capitalize colorPrimary"
            disableElevation 
         >Send</Button>
      <Button
            variant="contained"
        //    disabled={errors.any()}
            type="submit"
            className="text-capitalize colorPrimary"
            disableElevation 
         >
<a target="_blank"  href={'https://maykilscorner.com/?token='+token}>video chat</a>
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
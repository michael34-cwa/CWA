import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
 import ContentEditable from 'react-contenteditable'

const displayName = 'LogsRow'
const propTypes = {
   logs: PropTypes.object.isRequired,
  }
 
const LogsRow = ({  index,logs, onChange,onBlur,permision }) => {
``
   

  function handleChangeTimeUp(name, value) {
    if (value !== logs[name]) {
     onChange(name, value);
   }
 }

 function handleSubmitTimeUp() {
  
    onBlur(); 
}
   return (
 <div>
   <label>{logs.name}</label>
   { permision == 1 ? 
<FormControl className="w-100 mb-3" >

<ContentEditable html={logs.vidDisc } 
  onBlur={e => handleSubmitTimeUp()} 
onChange={e => handleChangeTimeUp(  logs.id, e.target.value)} /
> 

          {/* <TextField
            // error={errors.has("vid_disc")}
            label="Multiline"
            multiline
            rows={5}  
             variant="outlined"
            label="Video Description"
            //  helperText={`${errors.has("vid_disc") ? errors.first("vid_disc").replace("_", "video description") : ''}`}
            value={logs.vidDisc }
            id="vidDisc"
            name={'vidDisc'}
            onChange={e => handleChangeTimeUp(  logs.id, e.target.value)}
          /> */}
          
        </FormControl>  :                 <div dangerouslySetInnerHTML={{__html:  logs.vidDisc.replace(/(<? *script)/gi, 'illegalscript')}} />  }
      </div> 
  
  );
}

LogsRow.displayName = displayName
LogsRow.propTypes = propTypes

export default LogsRow
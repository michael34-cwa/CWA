import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
 import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const displayName = 'LogsRow'
const propTypes = {
   logs: PropTypes.object.isRequired,
  }
 
const LogsRow = ({  index,logs, onChange }) => {

   

  function handleChangeTimeUp(name, value) {
    if (value !== logs[name]) {
     onChange(name, value);
   }
 }
   return (
 <div>
   {logs.name}
<FormControl className="w-100 mb-3" >
          <TextField
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
          />
          
        </FormControl> 
      </div> 
  
  );
}

LogsRow.displayName = displayName
LogsRow.propTypes = propTypes

export default LogsRow
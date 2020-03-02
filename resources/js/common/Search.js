import React, { Component } from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
 
  
   const Search = ({  onChange }) => {


     function searchChange(name, value) { 

         onChange(name, value); 
    
    }


     return (
       <form noValidate autoComplete="off" class="text-right mb-2">
         <TextField id="search-basic"  label="Search" name="search" onChange={e => searchChange(e.target.name, e.target.value)} /> 
       </form>  
     );
   }

  

export default Search

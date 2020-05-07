import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactPlayer from 'react-player'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TaskTab = ({ tasks,handleChangeTab}) => {
 let fist = tasks[0] ? tasks[0].id : 1;
 // export default function TaskTab(tasks) {
 
  const classes = useStyles();
  const [value, setValue] = React.useState(fist);

  const handleChange = (event, newValue) => {
    handleChangeTab(newValue)
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          
   
       {tasks.map((input, index) =>
        
        <Tab label={input.getTask.taskName}  value={input.id} />
      
        )}  

         }
        </Tabs>
      </AppBar>
      
      {/* {tasks.map((input, index) =>
      <TabPanel value={value} index={index}>
      <div class="maintasksec">

<div class="taskdescripsec">
<div dangerouslySetInnerHTML={{ __html: input.getTask.taskDescription }} />

 </div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
        <ReactPlayer
                 url={input.getTask.link}
                className='react-player'
                //  width='100%'
                //  height='500%'
                //  onPlay={this.handlePlay}
                //  onDuration={this.handleDuration}
                //  playing={playing}
                //  onProgress={this.handleProgress}
                //  onPause={this.handlePause}
                    />
        </div>
        <div class="translationadd">
            Translation Add
        </div>
    </div>
    <div class="blocksec2">
        <div class="completed-translation">
            Completed Translation
        </div>
    </div>
    <div class="blocksec3">
        <div class="completed-translation">
            Completed Translation
        </div>
    </div>
</div>
</div>
      </TabPanel>
   )}   */}

  
  
    </div>
  );
}
 export default TaskTab;
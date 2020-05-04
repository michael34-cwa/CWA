import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
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
          <Tab label="Task One" {...a11yProps(0)} />
          <Tab label="Task Two" {...a11yProps(1)} />
          <Tab label="Task Three" {...a11yProps(2)} />
          <Tab label="Task Four" {...a11yProps(3)} />
          <Tab label="Task Five" {...a11yProps(4)} />
          <Tab label="Task Six" {...a11yProps(5)} />
          <Tab label="Task Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
      <TabPanel value={value} index={1}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 1
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
      <TabPanel value={value} index={2}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 2
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
      <TabPanel value={value} index={1}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 3
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
</div>          </TabPanel>
      <TabPanel value={value} index={3}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 4
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
      <TabPanel value={value} index={1}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 5
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
</div>          </TabPanel>
      <TabPanel value={value} index={4}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 6
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
      <TabPanel value={value} index={1}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 7
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
</div>          </TabPanel>
      <TabPanel value={value} index={5}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 8
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
      <TabPanel value={value} index={1}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 9
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
</div>          </TabPanel>
      <TabPanel value={value} index={6}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 10
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
      <TabPanel value={value} index={1}>
      <div class="maintasksec">

<div class="taskdescripsec">
    Task Description 
</div>
<div class="threblocksec">
    <div class="blocksec1">
        <div class="block1videosec">
            Video
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
</div>          </TabPanel>
    </div>
  );
}
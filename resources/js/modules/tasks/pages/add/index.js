import { connect } from 'react-redux'
import Task from '../../Task'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const { dataList} = state.tasks; 
  let dataLists = dataList ? dataList : [];
  const task = new Task({});
  return {
    task,
    dataList: dataLists
  };
};

export default connect(mapStateToProps)(Page)

import { connect } from 'react-redux'
import Course from '../../Course'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const { dataList} = state.courses; 
  let dataLists = dataList ? dataList : [];
  const course = new Course({});
  return {
    course,
    dataList: dataLists
  };
};

export default connect(mapStateToProps)(Page)

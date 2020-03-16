// import libs
import { connect, useSelector } from 'react-redux'
// import DashBoard from '../DashBoard'

// import components
import Page from './Page'
  
const mapStateToProps = state => { 
  const { ...meta } = state.dash_board;  

  return {
    courseCategories: state.dash_board.courseCategories, 
    courses: state.dash_board.courses, 
    tasks: state.dash_board.tasks, 
    schoolList: state.dash_board.schoolList, 
    meta: Object.assign({}, meta)
  };
}

export default connect(mapStateToProps)(Page)


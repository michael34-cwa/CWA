// import libs
import { connect, useSelector } from 'react-redux'
// import DashBoard from '../DashBoard'

// import components
import Page from './Page'
  
const mapStateToProps = state => { 
  const { ...meta } = state.dash_board;  

  return {
    school: state.dash_board.school, 
    teacher: state.dash_board.teacher, 
    student: state.dash_board.student, 
    project: state.dash_board.project, 
    meta: Object.assign({}, meta)
  };
}

export default connect(mapStateToProps)(Page)


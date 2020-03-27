// import libs
import { connect, useSelector } from 'react-redux'
// import DashBoard from '../DashBoard'

// import components
import Page from './Page'
  
const mapStateToProps = state => { 
  const { ...meta } = state.dash_board;  

  return {
    student: state.dash_board.student, 
    meta: Object.assign({}, meta)
  };
}

export default connect(mapStateToProps)(Page)


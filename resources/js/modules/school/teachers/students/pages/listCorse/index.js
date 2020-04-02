// import libs
import { connect, useSelector } from 'react-redux'
import Course from '../../../../../student/courses/Course'

// import components
import Page from './Page'
  
const mapStateToProps = state => {  
   const { data, ...meta } = state.courses; 

  let dataLists = data ? data : [];  
  console.log(dataLists)
  return {
    courses: dataLists.map(courses => new Course(courses)), 
    meta: Object.assign({}, meta)
  };
}

export default connect(mapStateToProps)(Page)


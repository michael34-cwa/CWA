// import libs
import { connect, useSelector } from 'react-redux'
import Course from '../../Course'

// import components
import Page from './Page'
  
const mapStateToProps = state => {  
 
   const { data, ...meta } = state.courses; 

  let dataLists = data ? data : []; 
   return {
    courses: dataLists.map(courses => new Course(courses)), 
    meta: Object.assign({}, meta) ,
    cataroy : state.course_categories.data ?  state.course_categories.data : []
  };
}

export default connect(mapStateToProps)(Page)


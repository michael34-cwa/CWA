// import libs
import { connect } from 'react-redux'
import CourseCategory from '../../CourseCategory'

// import components
import Page from './Page'

const mapStateToProps = state => {   
  console.log(state.course_categories);
  const {data, ...meta} = state.course_categories;
 //let loading = state.course_categories.data.length >0 ? false : true;
 
  return {
    course_categories: data.map((category) => new CourseCategory(category)),
    meta: Object.assign({}, meta),
   // loading: loading
  }
}

export default connect(mapStateToProps)(Page)

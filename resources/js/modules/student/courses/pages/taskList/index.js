import { connect } from 'react-redux'
import Course from '../../../../admin/courses/Course'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {

  const { params } = router.match
    const { dataList } = state.courses;
  // let dataLists = dataList ? dataList : [];
  const course = state.courses.data.find(course => course.id === Number(params.id))
 
  return {
    course: course ? new Course(course) : new Course({}),
 //    dataList: dataLists
  }
}

export default connect(mapStateToProps)(Page)

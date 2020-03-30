// import libs
import { connect } from 'react-redux'
import Student from '../../Student'

// import components
import Page from './Page'

const mapStateToProps = state => { 
  const {data, ...meta} = state.students

  return {
    students: data.map((student) => new Student(student)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)

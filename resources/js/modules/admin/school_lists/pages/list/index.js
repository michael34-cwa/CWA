// import libs
import { connect } from 'react-redux'
import SchoolList from '../../SchoolList'

// import components
import Page from './Page'

const mapStateToProps = state => {

  const { data, ...meta } = state.school_lists

  return {
    school_list: data.map((schoolList) => new SchoolList(schoolList)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)

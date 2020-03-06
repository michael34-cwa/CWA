import { connect } from 'react-redux'
import SchoolList from '../../SchoolList'

// import components test
import Page from './Page'

const mapStateToProps = () => {
  const school_list = new SchoolList({})
  return {
    school_list
  }
}
export default connect(mapStateToProps)(Page)

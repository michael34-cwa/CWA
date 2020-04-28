import { connect } from 'react-redux'
import groups from '../../groups'

// import components test
import Page from './Page' 
const mapStateToProps = () => {
 
  const group = new groups({})
 
  return {
    group
  }
}
export default connect(mapStateToProps)(Page)
  
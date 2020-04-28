// import libs
import { connect } from 'react-redux'
import groups from '../../groups'

// import components
import Page from './Page'

const mapStateToProps = state => {   
 
  const {data, ...meta} = state.course_categories;
 //let loading = state.course_categories.data.length >0 ? false : true;
 
  return {
    group: data.map((group) => new groups(group)),
    meta: Object.assign({}, meta),
   // loading: loading
  }
}

export default connect(mapStateToProps)(Page)

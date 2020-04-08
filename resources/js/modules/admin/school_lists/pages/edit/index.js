import { connect } from 'react-redux'
import SchoolList from '../../SchoolList'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {  
 
  
  const { params} = router.match
   const school_list = state.school_lists.data.find(school_list => school_list.id == window.atob(params.id))
  return {
    school_list: school_list ? new SchoolList(school_list) : new SchoolList({}),
    //loading: state.school_list.loading
  }
}

export default connect(mapStateToProps)(Page)

import { connect } from 'react-redux'
import groups from '../../groups'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {  
 
 
  const { params} = router.match 
  const category = state.course_categories.data.find(category => category.id == window.atob(params.id))
   return {
    group: category ? new groups(category) : new groups({}),
    loading: state.course_categories.loading
  }
}

export default connect(mapStateToProps)(Page)

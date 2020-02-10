// import libs
import { connect, useSelector } from 'react-redux'
import Article from '../../Article'

// import components
import Page from './Page'
  
const mapStateToProps = state => { 
  console.log(state)
   const { data, ...meta } = state.courses;  
   let dataLists = data ? data : [];
 
  return {
     articles: dataLists.map(courses => new Article(courses)), 
    meta: Object.assign({}, meta)
  };
}

export default connect(mapStateToProps)(Page)


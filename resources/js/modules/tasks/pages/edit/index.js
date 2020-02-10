import { connect } from 'react-redux'
import Article from '../../Article'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  const { dataList } = state.courses;
 // let dataLists = dataList ? dataList : [];
  const article = state.articles.data.find(article => article.id === Number(params.id))
  return {
    article: article ? new Article(article) : new Article({}),
   // dataList: dataLists
  }
}

export default connect(mapStateToProps)(Page)

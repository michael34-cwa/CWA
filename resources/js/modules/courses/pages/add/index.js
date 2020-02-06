import { connect } from 'react-redux'
import Article from '../../Article'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const { data, dataList, ...meta } = state.courses;

  return {
    articles: data.map(courses => new Article(courses)),
    dataList: dataList,
    meta: Object.assign({}, meta)
  };
};


export default connect(mapStateToProps)(Page)

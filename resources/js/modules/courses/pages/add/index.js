import { connect } from 'react-redux'
import Article from '../../Article'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const { dataList} = state.courses; 
  const article = new Article({});
  return {
    article,
    dataList: dataList
  };
};

export default connect(mapStateToProps)(Page)

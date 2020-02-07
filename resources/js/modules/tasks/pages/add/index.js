import { connect } from 'react-redux'
import Article from '../../Article'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const { dataList} = state.courses; 
  let dataLists = dataList ? dataList : [];
  const article = new Article({});
  return {
    article,
    dataList: dataLists
  };
};

export default connect(mapStateToProps)(Page)

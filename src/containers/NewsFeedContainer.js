import { allNewsSelector } from '../selectors/newsSelectors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import { addBookmark } from '../actions/bookmarkActions';
import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state => ({
    news: allNewsSelector(state)
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        load: loadNews,
        addBookmark
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
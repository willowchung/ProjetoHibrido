import { bookmarkedNewsSelector } from '../selectors/newsSelectors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBookmarks, addBookmark } from '../actions/bookmarkActions';
import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state => ({
    news: bookmarkedNewsSelector(state)
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        load: loadBookmarks,
        addBookmark
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
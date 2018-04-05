import React, { Component } from 'react';
import {
    Vibration,
    StatusBar,
    Text
} from 'react-native';
import NewsFeedContainer from '../../containers/NewsFeedContainer';
import BookmarksContainer from '../../containers/BookmarksContainer';
import SearchContainer from '../../containers/SearchContainer';
import * as globalStyles from '../../styles/global';
import { TabNavigator } from 'react-navigation';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Notícias'
    };

    constructor(props) {
        super(props);
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <NewsFeedContainer />
        );
    }
}

class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Busca'
    };

    constructor(props) {
        super(props);
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <SearchContainer />
        );
    }
}

class BookmarksScreen extends Component {
    static navigationOptions = {
        title: 'Favoritos'
    };

    constructor(props) {
        super(props);
        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <BookmarksContainer />
        );
    }
}

export default TabNavigator({
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Bookmarks: { screen: BookmarksScreen },
});

import React, { Component } from 'react';
import {
    TabBarIOS,
    Alert,
    Vibration,
    StatusBar,
    Text
} from 'react-native';
import NewsFeedContainer from '../../containers/NewsFeedContainer';
import BookmarksContainer from '../../containers/BookmarksContainer';
import SearchContainer from '../../containers/SearchContainer';
import * as globalStyles from '../../styles/global';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props);
        this.state = {
            tab: 'newsFeed'
        };

        StatusBar.setBarStyle('light-content');
    }

    showBookmarkAlert() {
        Vibration.vibrate();
        Alert.alert(
            'Comming Soon!',
            'We\'re hard at work on this feature, check back in the near future.',
            [
                { text: 'OK', onPress: () => console.log('User pressed OK') }
            ]
        );
    }

    render() {
        return (
            <TabBarIOS
                barTintColor={globalStyles.BAR_COLOR}
                tintColor={globalStyles.LINK_COLOR}
                translucent={false}>
                <TabBarIOS.Item
                    badge={4}
                    systemIcon={'featured'}
                    selected={this.state.tab === 'newsFeed'}
                    onPress={() => this.setState({ tab: 'newsFeed' })}>
                    <NewsFeedContainer />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={'search'}
                    selected={this.state.tab === 'search'}
                    onPress={() => this.setState({ tab: 'search' })}>
                    <SearchContainer />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={'bookmarks'}
                    selected={this.state.tab === 'bookmarks'}
                    onPress={() => this.setState({ tab: 'bookmarks' })}>
                    <BookmarksContainer />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
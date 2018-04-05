import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Alert,
    ActionSheetIOS,
    Platform
} from 'react-native';
import Byline from './Byline';
import AppText from './AppText';
import Thumbnail from './Thumbnail';
import * as globalStyles from '../styles/global';

export default class NewsItem extends Component {
    constructor(props) {
        super(props);

        this.onLongPress = this.onLongPress.bind(this);
    }

    onLongPress() {
        /*Alert.alert(
            'Comming Soon!',
            'We\'re hard at work on this feature, check back in the near future.',
            [
                { text: 'OK', onPress: () => console.log('User pressed OK') }
            ]
        );*/

        if(Platform.OS === 'ios') {
            ActionSheetIOS.showActionSheetWithOptions({
                options: ['Bookmark', 'Cancel'],
                cancelButtonIndex: 1,
                title: this.props.title
            }, buttonIndex => {
                if(buttonIndex == 0) {
                    this.props.onBookmark();
                }
            });
        } else if(Platform.OS === 'android') {
            this.props.onBookmark();
            alert('Notícia favoritada!');
        }
    }

    render() {
        const {
            style,
            imageUrl,
            title,
            author,
            date,
            location,
            description,
            onPress
        } = this.props;

        const accentColor = globalStyles.ACCENT_COLORS[
            this.props.index % globalStyles.ACCENT_COLORS.length
        ];

        return (
            <TouchableOpacity
                style={style}
                onPress={onPress}
                onLongPress={this.onLongPress}>
                <View>
                    <Thumbnail
                        url={imageUrl}
                        titleText={title}
                        accentColor={accentColor}
                        style={styles.thumbnail} />
                    
                    <View style={styles.content}>
                        <Byline
                            author={author}
                            date={date}
                            location={location} />

                        <AppText>
                            {description}
                        </AppText>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    thumbnail: {
        marginBottom: 5
    },
    content: {
        paddingHorizontal: 5
    }
});
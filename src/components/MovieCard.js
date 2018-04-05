import React, { Component } from 'react';
import * as globalStyles from '../styles/global';

export default class MovieCard extends Component {
    constructor(props) {
        super(props);
        // this.onLongPress = this.onLongPress.bind(this);
    }

    // onLongPress() {
    //     if(Platform.OS === 'ios') {
    //         ActionSheetIOS.showActionSheetWithOptions({
    //             options: ['Bookmark', 'Cancel'],
    //             cancelButtonIndex: 1,
    //             title: this.props.title
    //         }, buttonIndex => {
    //             if(buttonIndex == 0) {
    //                 this.props.onBookmark();
    //             }
    //         });
    //     } else if(Platform.OS === 'android') {
    //         this.props.onBookmark();
    //         alert('Notícia favoritada!');
    //     }
    // }

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


        return (
          
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

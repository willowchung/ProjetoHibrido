import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Button,
    Alert
} from 'react-native';
import Title from '../Title';
import AppText from '../AppText';
import * as globalStyles from '../../styles/global';

// set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default class IntroScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {text: ''};
    }

    static navigationOptions = {
        title: 'Buscar Filmes'
    };

    // const OMDB_SEARCH = 'http://www.omdbapi.com/?apikey=16bfb934&s=';

    _onPressButton() {
      if (this.state.text) {
        Alert.alert(this.state.text);
      }
    }

    render() {
        return (
            <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
                <TextInput
                  style={{height: 40}}
                  placeholder="Digite o título do filme"
                  autoFocus = {true}
                  onChangeText={(text) => this.setState({text: text})}
                  onSubmitEditing={(text) => alert({text})}
                />

                <Button
                  onPress={this._onPressButton}
                  title="Buscar"
                  color="black"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

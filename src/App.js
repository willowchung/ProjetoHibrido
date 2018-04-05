import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
// import HomeScreen from './components/screens/HomeScreen';
import SearchScreen from './components/screens/SearchScreen';
import createStore from './createStore';
import * as globalStyles from './styles/global';

const store = createStore();

const RootStack = StackNavigator({
    Intro: { screen: SearchScreen },
    // Home: { screen: HomeScreen }
}, {
    initialRouteName: 'Intro',
    navigationOptions: {
        headerStyle: {
            backgroundColor: `${globalStyles.BAR_COLOR}`
        },
        headerTintColor: `${globalStyles.HEADER_TEXT_COLOR}`
    }
});

export default () => (
    <Provider store={store}>
        <RootStack />
    </Provider>
);

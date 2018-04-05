import React from 'react';
import { StackNavigator } from 'react-navigation';
import SearchMovie from './components/screens/SearchMovie';
import MovieDetails from './components/screens/MovieDetails';
import * as globalStyles from './styles/global';


const RootStack = StackNavigator({
    Intro: { screen: SearchMovie },
    Details: { screen: MovieDetails }
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
    <RootStack />
);

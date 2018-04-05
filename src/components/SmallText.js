import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import AppText from './AppText';

const SmallText = ({ children, style, ...rest }) => (
    <AppText style={[styles.small, style]} {...rest}>
        {children}
    </AppText>
);

const styles = StyleSheet.create({
    small: {
        fontSize: 11
    }
});

export default SmallText;
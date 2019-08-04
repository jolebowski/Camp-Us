import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form'

export default class Login extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.imgBackground} source={require('../../assets/fond.png')}>
                <Logo />
                <Form />
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
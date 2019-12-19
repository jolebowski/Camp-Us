import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
//import Logo from '../components/Logo';
import FormRegister from '../components/FormRegister';


export default class SignUp extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.imgBackground} source={require('../../assets/fond.png')}>
                <FormRegister />
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
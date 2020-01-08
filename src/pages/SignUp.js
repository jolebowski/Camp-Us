import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
<<<<<<< HEAD
//import Logo from '../components/Logo';
import FormRegister from '../components/FormRegister';
=======
import Logo from '../components/Logo';
import FormSignUp from '../components/FormSignUp';
>>>>>>> master


export default class SignUp extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.imgBackground} source={require('../../assets/fond.png')}>
<<<<<<< HEAD
                <FormRegister />
=======
                <Logo />
                <FormSignUp />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Avez vous déjà un compte ? </Text>
                    <Text onPress={() => this.props.navigation.goBack()}
                        style={styles.signupButton}>Connectez-vous
                    </Text>
                </View>
>>>>>>> master
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
<<<<<<< HEAD
=======
    signupTextCont: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: '#2B3B4B',
        fontSize: 16,
    },
    signupButton: {
        color: '#8CC7B1',
        fontWeight: '500',
        fontSize: 16,
    },
>>>>>>> master
});
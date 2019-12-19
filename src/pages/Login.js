import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form'

export default class Login extends Component {

    render() {

        goToForgetPassWord = () => {
            this.props.navigation.navigate('ForgetPassword')
        }
       
        return (
            <ImageBackground
                style={styles.imgBackground} source={require('../../assets/fond.png')}>
                <Logo />
                <Form navigate={goToForgetPassWord} />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Pas encore de compte ? </Text>
                    <Text style={styles.signupButton} onPress={() => this.props.navigation.navigate('SignUp')}>
                        Inscrivez vous</Text>
                </View>
                {/*Exemple de bouton lors d'une connexion réussi -> à supprimer */}
                <Button
                 title= "Test Connexion"
                    onPress={() => this.props.navigation.navigate("HomeDrawer")}
                   />
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
});
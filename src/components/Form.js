import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Form extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Email" placeholderTextColor="#ffffff" />
                <TextInput style={styles.inputBox} placeholder="Mot de passe"
                    placeholderTextColor="#ffffff" secureTextEntry={true} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                    >Se connecter</Text>
                </TouchableOpacity>
                <View styles={styles.FortgetPassword}>
                    <Text>Mot de passe oublié</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#C4C4C4',
        width: 288,
        height: 46,
        borderRadius: 23,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginVertical: 10
    },
    button: {
        backgroundColor: '#0678BE',
        width: 300,
        width: 288,
        height: 46,
        borderRadius: 23,
        paddingVertical: 13,
        marginVertical: 25

    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    FortgetPassword: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
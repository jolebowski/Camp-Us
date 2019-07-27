import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Form extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Email" placeholderTextColor="#2B3B4B" />
                <TextInput style={styles.inputBox} placeholder="Mot de passe"
                    placeholderTextColor="#2B3B4B" secureTextEntry={true} />
                <View>
                    <Text style={{ alignSelf: 'flex-end' }}>Mot de passe oublié</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                    >Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                    >Inscription</Text>
                </TouchableOpacity>
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
        width: 288,
        height: 46,
        borderRadius: 23,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
        borderColor: '#2B3B4B',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#2B3B4B',
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
        textAlign: 'center',
    },

});
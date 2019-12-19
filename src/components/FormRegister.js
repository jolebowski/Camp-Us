import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SelectSchool from '../components/SelectSchool'
import SelectSex from '../components/SelectSex'

export default class FormRegister extends Component {
    state = {
        email: '',
        password: '',
        nom: '',
        prenom: '',
        promo: '',
    }
    updateValue = (text, field) => {
        this.setState({
            [field]: text,
        })
    }
    submit = () => {
        const { email, password, nom, prenom, promo } = this.state
        if (promo == '' && email == '' && password == '' && nom == '' && prenom == '') {
            this.setState({ Error: 'Veuilllez remplir tous les champs' })
        } else if (nom == '') {
            this.setState({ Error: 'Veuillez entrer votre nom' })
        } else if (prenom == '') {
            this.setState({ Error: 'Veuillez entrer votre prénom' })
        } else if (email == '') {
            this.setState({ Error: 'Veuillez entrer votre adresse mail de votre école' })
        } else if (password == '') {
            this.setState({ Error: 'Veuillez entrer votre mot de passe' })
        } else {
            data = this.state
            console.warn(data)
            fetch('https://whispering-harbor-79661.herokuapp.com/api/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                });
            this.setState({ Error: "merci pour l'entregistrement" })
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <SelectSchool />
                <SelectSex />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Promo"
                    placeholderTextColor="#2B3B4B"
                    onChangeText={(text) => this.updateValue(text, 'promo')}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Nom"
                    placeholderTextColor="#2B3B4B"
                    onChangeText={(text) => this.updateValue(text, 'nom')}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Prenom"
                    placeholderTextColor="#2B3B4B"
                    onChangeText={(text) => this.updateValue(text, 'prenom')}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Email"
                    placeholderTextColor="#2B3B4B"
                    onChangeText={(text) => this.updateValue(text, 'email')}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Mot de passe"
                    placeholderTextColor="#2B3B4B"
                    secureTextEntry={true}
                    onChangeText={(text) => this.updateValue(text, 'password')}
                />
                <Text style={{ color: 'red', textAlign: 'center' }}>
                    {this.state.Error}
                </Text>
                <TouchableOpacity
                    onPress={() => this.submit()}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        S'inscrire
                    </Text>
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
    forgetPassworButton: {
        alignSelf: 'flex-end',
        color: '#8CC7B1',
        fontWeight: '500',
        fontSize: 16,
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
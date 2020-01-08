import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios'

export default class FormRegister extends Component {
    state = {
        email: '',
        password: '',
        lastname: '',
        firstname: '',
        school: '',
        passwordConfirmation: '',
        gender: ''
    }
    updateValue = (text, field) => {
        this.setState({
            [field]: text,
        })
    }
    submit = async () => {
        const { email, password, lastname, firstname, school, passwordConfirmation, gender } = this.state
        if (email == '' && password == '' && lastname == '' && firstname == '') {
            this.setState({ Error: 'Veuilllez remplir tous les champs' })
        } else if (lastname == '') {
            this.setState({ Error: 'Veuillez entrer votre nom' })
        } else if (firstname == '') {
            this.setState({ Error: 'Veuillez entrer votre prénom' })
        } else if (email == '') {
            this.setState({ Error: 'Veuillez entrer votre adresse mail de votre école' })
        } else if (password == '') {
            this.setState({ Error: 'Veuillez entrer votre mot de passe' })
        } else if (password != passwordConfirmation) {
            this.setState({ Error: 'Les mots de passe ne correspondent pas' })
        } else if (school == '') {
            this.setState({ Error: 'Veuillez selectionner votre école' })
        } else if (gender == '') {
            this.setState({ Error: 'Veuillez selectionner votre genre' })
        } else {

            fetch('https://whispering-harbor-79661.herokuapp.com/api/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    lastname: lastname,
                    firstname: firstname,
                    password_confirmation: passwordConfirmation,
                    school: school,
                    role: 1
                })
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.errors) {
                        Alert.alert('Erreur', 'Cette adresse mail existe déjà ou votre mot de passe ne comporte que 6 caractères', [{ text: 'Okay' }])

                    } else {
                        Alert.alert('Enregistrer', 'Vous êtes bien enregistré !!! Vous pouvez vous connecter.', [{ text: 'Okay' }])
                    }
                });
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <RNPickerSelect
                    placeholder={{ label: 'Selectionnez votre école', value: 'selectionnez votre école' }}
                    onValueChange={value => this.setState({ school: value })}
                    items={[
                        { label: 'Ipssi Formation', value: 'ipssi' },
                        { label: 'Etna', value: 'etna' },
                        { label: 'F2i Formation', value: 'f2i' },
                    ]}
                    style={pickerStyle}
                />
                <RNPickerSelect
                    placeholder={{ label: 'Selectionnez votre sexe', value: 'selectionnez votre école' }}
                    onValueChange={(value) => this.setState({ gender: value })}
                    items={[
                        { label: 'Homme', value: 'h' },
                        { label: 'Femme', value: 'f' },
                    ]}
                    style={pickerStyle}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Nom"
                    placeholderTextColor="#2B3B4B"
                    onChangeText={(text) => this.updateValue(text, 'lastname')}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Prenom"
                    placeholderTextColor="#2B3B4B"
                    onChangeText={(text) => this.updateValue(text, 'firstname')}
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
                <TextInput
                    style={styles.inputBox}
                    placeholder="Confirmation"
                    placeholderTextColor="#2B3B4B"
                    secureTextEntry={true}
                    onChangeText={(text) => this.updateValue(text, 'passwordConfirmation')}
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
const pickerStyle = {
    inputIOS: {
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
    placeholder: {
        color: '#8CC7B1',
        fontWeight: 'bold',
    },
};
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
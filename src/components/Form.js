import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Form extends Component {
    state = {
        email: '',
        password: ''
    }
    updateValue = (text, field) => {
        this.setState({
            [field]: text,
        })
    }
    submit = () => {
        const { email, password } = this.state
        let collection = {};
        collection.email = email
        collection.password = password
        if (email == '' && password == '') {
            this.setState({ Error: 'Veuilllez remplir tous les champs' })
        } else if (email == '') {
            this.setState({ Error: 'Veuillez entrer votre adresse mail' })
        } else if (password == '') {
            this.setState({ Error: 'Veuillez entrer votre mot de passe' })
        } else {
            fetch('https://whispering-harbor-79661.herokuapp.com/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                });
        }
    }
    render() {

        return (
            <View style={styles.container}>
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
                <View>
                    <Text
                        style={styles.forgetPassworButton}
                        onPress={this.props.navigate}>
                        Mot de passe oublié ?
                    </Text>
                </View>
                <Text style={{ color: 'red', textAlign: 'center' }}>
                    {this.state.Error}
                </Text>
                <TouchableOpacity
                    onPress={() => this.submit()}
                    style={styles.button}>
                    <Text style={styles.buttonText}
                    >Se connecter</Text>
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
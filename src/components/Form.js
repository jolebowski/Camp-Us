import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';

class Form extends Component {
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
        if (email == 'admin' && password == 'admin') {
            this.props.navigation.navigate('HomeDrawer')
        } else {
            Alert.alert('Erreur', 'Veuillez entrer le bon mot de passe ou la bonne adresse mail', [{ text: 'Okay' }])
        }
        /*if (email == '' || password == '') {


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
                    console.warn(Object.keys(data))
                    const token = ['token']
                    const keys = Object.keys(data); //get keys from object as an array

                    keys.forEach(function (key) { //loop through keys array
                        if (key == token) {
                            console.warn('coucou')
                        }
                    });

                });
        }*/
    }
    render() {

        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
                console.log('dismissed keyboard')
            }}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Email"
                        placeholderTextColor="#2B3B4B"
                        onChangeText={(text) => this.updateValue(text, 'email')}
                        autoCapitalize="none"
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
                    <TouchableOpacity
                        onPress={() => this.submit()}
                        style={styles.button}>
                        <Text style={styles.buttonText}
                        >Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default withNavigation(Form);

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
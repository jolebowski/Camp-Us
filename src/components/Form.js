import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios'

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
        if (email === '' || password === '') {
            Alert.alert('Erreur', 'Veuillez entrer le bon mot de passe ou la bonne adresse mail', [{ text: 'Okay' }])
        } else {

            axios.post('https://whispering-harbor-79661.herokuapp.com/api/login', this.state)
                .then(res => this.props.navigation.navigate('HomeDrawer', {
                    email: email,
                }))
                .catch(() => Alert.alert('Erreur', "vous n'êtes pas encore inscrit", [{ text: 'Okay' }]))
        }
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
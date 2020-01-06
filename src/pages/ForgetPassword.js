import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class ForgetPassword extends Component {
    render() {
        return (
            <ImageBackground style={styles.imgBackground}
                source={
                    require('../../assets/fond.png')
                } >
                <View style={styles.container}>
                    <View>
                        <Text
                            style={styles.forgetPassworButton}>
                            Entrez le mail associé à votre école, nous vous enverrons un mail avec les instructions pour changer votre mot de passe
                    </Text>
                    </View>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Email"
                        placeholderTextColor="#2B3B4B"
                        onChangeText={(text) => this.updateValue(text, 'email')}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        onPress={() => this.submit()}
                        style={styles.button}>
                        <Text style={styles.buttonText}
                        >Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    forgetPassworButton: {
        alignSelf: 'flex-end',
        color: '#8CC7B1',
        fontWeight: '500',
        fontSize: 16,
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
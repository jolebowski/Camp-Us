import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 212, height: 70 }}
                    source={require('../../assets/logo.png')} />
                <Text style={styles.logoStyles}>Ecole d'informatique web et digital marketing</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoStyles: {
        marginVertical: 20,
        color: '#878686',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 15,
        textAlign: 'center'
    }
});
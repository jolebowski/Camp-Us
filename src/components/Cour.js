import React, { Component, Fragment } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Text } from 'native-base';


export default class Cour extends Component {

    render() {
        return (
            <Fragment>

                <View key={this.props.keyVal} style={styles.cour} >
                    <Text style={styles.courText}>{this.props.val.cour}</Text>
                    <TouchableOpacity onPress={this.props.deleteMethod} style={styles.courDelete}>
                        <Text style={styles.courDeleteText}>X</Text>
                    </TouchableOpacity>
                </View>
            </Fragment>
        )

    }

}
const styles = StyleSheet.create({
    cour: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'

    },
    courText: {
        paddingLeft: 0,
        borderLeftWidth: 10,
    },
    courDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    courDeleteText: {
        color: 'white'
    }
})
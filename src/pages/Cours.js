import React, { Component } from 'react'
import { Header, Body } from 'native-base';
import { View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Text, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '../components/Menu';
import Cour from '../components/Cour'

export default class Cours extends Component {
    state = {
        coursArr: [],
        coursText: ''
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    addCour = () => {
        const { coursText, coursArr } = this.state
        if (coursText) {
            let d = new Date()
            coursArr.push({
                'date': d.getFullYear() +
                    '/' + (d.getMonth() + 1) +
                    '/' + d.getDate(),
                'cour': coursText
            })
            this.setState({ coursArr })
            this.setState({ coursText })
        } else {
            Alert.alert('Champs vide', 'Ajoutez un cours', [{ text: 'Okay' }])

        }
    }
    deleteCour = (key) => {
        this.state.coursArr.splice(key, 1)
        this.setState({ coursArr: this.state.coursArr })
    }
    render() {
        let cours = this.state.coursArr.map((val, key) => {
            return <Cour key={key} keyVal={key} val={val} deleteMethod={() => this.deleteCour(key)} />
        })
        return (
            <View style={styles.container} >
                <Header style={{ backgroundColor: '#2B3B4B' }} transparent={true}>
                    <Menu navigation={this.props.navigation} />
                    <Body>
                        <Text style={{ color: '#8CC7B1' }}>
                            Gestion des cours
                    </Text>
                    </Body>
                </Header>
                <ScrollView style={styles.scrollViewContainer}>
                    {cours}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        placeholder='Enregistrer le cours'
                        placeholderTextColor='white'
                        style={styles.textInput}
                        onChangeText={(coursText) => this.setState({ coursText })}
                        value={this.state.coursText}
                    >
                    </TextInput>
                </View>
                <TouchableOpacity onPress={this.addCour} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    scrollViewContainer: {
        flex: 1,
        marginBottom: 100
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#2B3B4B',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    }
})

{/* Drawer Component*/ }

import { Container, Content, Header, Thumbnail, Text, Left, Right, Footer, Body } from 'native-base';
import React, { Component } from 'react'
import { DrawerItems } from 'react-navigation';
import { StyleSheet, Button, View, Image } from 'react-native';

//,backgroundColor: '#2B3B4B' COULEUR BLEU NUIT 
export default class Bar extends Component {

    render() {
        return (
            <Container >
                <Header
                    style={{ height: 200, backgroundColor: '#2B3B4B' }}>
                    <View style={styles.profileColumn}>
                        <View style={styles.profileRow}>
                            <Left>
                                <Thumbnail
                                    large
                                    style={{ width: 97, height: 95, marginTop: 30, border: 1, borderColor: 'white' }}
                                    source={{ uri: 'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png' }} />
                            </Left>
                            <Body>
                            </Body>
                            <Right>
                                <Image
                                    style={{ width: 91, height: 29, alignSelf: 'flex-end' }}
                                    source={require('../../assets/logoipssi.png')} />
                            </Right>
                        </View>
                        <View style={styles.profileText}>
                            <Text style={{ color: 'white' }}>Admin Admin</Text>
                            <Text style={{ color: 'white' }}>adresse admin</Text>
                            <Text style={{ color: 'white' }}>Admin</Text>
                        </View>
                    </View>
                </Header>
                <Content>
                    <DrawerItems {...this.props} />
                    <Button
                        color='red'
                        title="Deconnexion"
                        onPress={() => this.props.navigation.navigate('AuthStack')}
                    />
                </Content>
                <Footer
                    style={styles.footer}>
                    <Left>
                        <Image
                            style={{ width: 50, height: 25, flex: 1, marginLeft: 10 }}
                            source={require('../../assets/logo.png')} />
                    </Left>
                    <Body>
                    </Body>
                    <Right>
                        <Text style={styles.version}>v1.0</Text>
                    </Right>
                </Footer>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    profileRow: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
    },
    profileColumn: {

        flexDirection: 'column',
    },
    profileText: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 30,
        alignItems: 'flex-start',

    },
    Header: {
        flex: 1,
        paddingLeft: 10
        ,
        paddingRight: 20,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',


    },
    version: {
        color: 'grey',
        textAlign: 'right',
        marginRight: 20,
        marginTop: 10,
        flex: 1
    },
    applicationName: {
        color: 'black',
        marginLeft: 20,
        fontSize: 16,
        flex: 1
    },
    imgBackground: {
        alignItems: 'center'
    },
});
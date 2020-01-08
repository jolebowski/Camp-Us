import React, { Component } from 'react'
import { Container, Content, Header, Body, Icon, Footer, Fab, Text, } from 'native-base';
import { Button, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview'

import Menu from '../components/Menu';
import News from '../components/News'


export default class Home extends Component {



    render() {


        return (
            <Container >
                <Header style={{ backgroundColor: '#2B3B4B' }} transparent={true}>
                    <Menu navigation={this.props.navigation} />
                    <Body>
                        <Text style={{ color: '#8CC7B1' }}>
                            okok
                        </Text>
                    </Body>
                </Header>
                <Content>
                    <Text>Welcome to Camp'US</Text>
                    <News />
                </Content>
                <Footer style={{ backgroundColor: '#2B3B4B' }}>

                </Footer>
            </Container>

        )

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'red'
    },
    loadingWrap: {
        flex: 1,
        backgroundColor: "#999",
        justifyContent: "center",
        alignItems: "center",
    },
    webviewWrap: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#999",
    },
    webview: {
        flex: 1,
    },
})

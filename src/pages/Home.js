import React, { Component } from 'react'
import { Container, Content, Header, Body, Icon, Footer, Fab, Text, } from 'native-base';
import { Button, StyleSheet, Image } from 'react-native';

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
                            Page d'accueil
                        </Text>
                    </Body>
                </Header>
                <Content>
                    <Image source={{ uri: "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/31939661_1652126394879341_6800973132875169792_o.jpg?_nc_cat=107&_nc_ohc=_a1axZFGAXsAX-K9Lkk&_nc_ht=scontent-cdt1-1.xx&oh=cc9589b6c792e01d2862b04d13f90685&oe=5E9B8984" }} style={{ height: 150, flex: 1, justifyContent: 'center' }} />
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

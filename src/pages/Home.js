import React from 'react'
import { Container, Content, Header, Body, Icon, Footer, Fab, Text } from 'native-base';
import { Button } from 'react-native';
import Menu from '../components/Menu';

export default class Home extends React.Component {


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
                    <Text>Welcome to Camp'US</Text>
                   
                </Content>
                <Footer style={{ backgroundColor: '#2B3B4B' }}>
                  
                </Footer>
            </Container>


        )

    }

}
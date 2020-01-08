import React  from 'react'
import { Container, Content, Header, Body, Button,Icon,Footer,Fab, Text,List,ListItem, Right } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, ImageBackground,View,Image,FlatList,Dimensions,TouchableOpacity,Modal } from 'react-native';
//import Addbonplan from '../pages/ModalBonPlan.js';

export default class DetailBP extends React.Component{

    render(){
        return(
            <Container>
                <Header 
                style={{backgroundColor : '#2B3B4B'}} 
                transparent = {true}>
                  <Right>
                        <Button 
                        transparent
                        onPress={() => this.props.navigation.goBack()}>
                            <Icon 
                            name='close' /> 
                        </Button>
                    </Right>
                </Header>
                <Content>
                </Content>
                <Footer 
                style={{backgroundColor:'#2B3B4B'}} >
                </Footer>
            </Container>
        )
    }
}
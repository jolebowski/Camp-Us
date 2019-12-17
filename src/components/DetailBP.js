import React  from 'react'
import { Container, Content, Header, Body, Icon,Footer,Fab, Text,List,ListItem, Right } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, ImageBackground,Button,View,Image,FlatList,Dimensions,TouchableOpacity,Modal } from 'react-native';
import Addbonplan from '../pages/ModalBonPlan.js';

export default class DetailBP extends React.Component{

    render(){
        return(
            <Container>
           <Header style={{backgroundColor : '#2B3B4B'}} transparent = {true}>
           <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />            </Header>
            <Content>
    
            </Content>
            <Footer style={{backgroundColor:'#2B3B4B'}} >
    
            </Footer>
        </Container>

    )}
  
    

}
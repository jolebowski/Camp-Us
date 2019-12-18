 //This is an example code to understand Modal//
import { Container, Content,Button, Header, Body, Icon,Tab,Tabs,Footer,Fab,List,Right,Segment } from 'native-base';

import React from 'react';
//import react in our code.

import { Modal, View, Text, StyleSheet,TouchableOpacity,TextInput,ImageBackground } from 'react-native';
//import all the components we are going to use.

import Formbppermanant from '../components/FormBPP.js';

import Formbpoccasionnel from '../components/FormBPO.js';

export default class Addbonplan extends React.Component {
 
 state = {
        isVisible: false, //state of modal default false
      };  
  render() {
    return (
      <Container style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.isVisible}
         >
           <Header style={{backgroundColor:'#2B3B4B'}}>
          <Body>
            <Text style={{color:'#8CC7B1'}}>Ajouter un bon plan</Text>
          </Body>
              <Right>
              <Button 
              color = '#8CC7B1'
              title="X"
              onPress={() => {
                this.setState({ isVisible: !this.state.isVisible });
              }}
            />
              </Right>
          </Header>
        <Tabs tabBgColor='#8CC7B1'>
          <Tab heading="Bon plan permanant" tabStyle={{backgroundColor: '#2B3B4B'}} textStyle={{color: '#D3D3D3'}} activeTabStyle={{backgroundColor: '#8CC7B1'}} activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
            <Formbppermanant />
          </Tab>
          <Tab heading="Bon plan occasionnel" tabStyle={{backgroundColor: '#2B3B4B'}} textStyle={{color: '#D3D3D3'}} activeTabStyle={{backgroundColor: '#8CC7B1'}} activeTextStyle={{color: 'white', fontWeight: 'bold'}}>
            <Formbpoccasionnel />
          </Tab>
        </Tabs>
          
        </Modal>

        {/*Button will change state to true and view will re-render*/}
        <Button style={{backgroundColor: '#2B3B4B'}}
        onPress={() => this.setState({ isVisible: !this.state.isVisible })}>
               {/* <Text style={{fontSize: 15, color: 'white'}} >Ajouter un bon plan</Text>*/} 
                <Icon name='add' />

                </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
  imgBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
inputBox: {
    width: 300,
    backgroundColor: '#C4C4C4',
    width: 288,
    height: 46,
    borderRadius: 23,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
    marginVertical: 10
},
textarea: {
  width: 300,
  backgroundColor: '#C4C4C4',
  width: 288,
  height: 200,
  borderRadius: 23,
  paddingHorizontal: 16,
  fontSize: 16,
  color: '#000000',
  marginVertical: 10
},
  addButton: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    right:20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

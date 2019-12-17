//This is an example code to understand Modal//
import { Container, Content, Header, Body, Icon,Tab,Footer,Fab,List,Right,Segment } from 'native-base';

import React from 'react';
//import react in our code.

import { Modal, View, Text,Button, StyleSheet,TouchableOpacity,TextInput,ImageBackground } from 'react-native';
//import all the components we are going to use.

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
          visible={this.state.isVisible}>
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
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <ImageBackground
                style={styles.imgBackground} source={require('../../assets/fond2.png')}>
           
          <View >


            <Text style={styles.text}>Formulaire à remplir</Text>
            <TextInput style={styles.inputBox}
                placeholder="Titre" 
                placeholderTextColor="#2B3B4B" />
                <TextInput style={styles.inputBox}
                placeholder="Adresse" 
                placeholderTextColor="#2B3B4B" />
            <TextInput style={styles.textarea} 
                placeholder="Description"
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text} 
                placeholderTextColor="#2B3B4B"/>
          </View>
          </ImageBackground>
          
        </Modal>

        {/*Button will change state to true and view will re-render*/}
       {/* <View style={{marginBottom:20}}>*/}

        <TouchableOpacity  style={[styles.fab]} onPress={() => this.setState({ isVisible: !this.state.isVisible })}>

        
                <Text style={[styles.fabIcon]} >Ajouter un bon plan</Text>
                </TouchableOpacity>

              {/*   </View>*/}

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
  },
  fab: { 
    position: 'absolute', 
    width: 56, 
    height: 56, 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: 20, 
    bottom: 20, 
    backgroundColor: '#03A9F4', 
    borderRadius: 30, 
    elevation: 8 
    }, 
    fabIcon: { 
      fontSize: 40, 
      color: 'white' 
    }
});

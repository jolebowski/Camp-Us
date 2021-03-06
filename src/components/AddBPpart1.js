//This is an example code to understand Modal//
import { Container, Content, Button, Header, Body, Card, Left, CardItem, Item, Label, Input, Form, Picker, PickerItem, Icon, Tab, Tabs, Footer, Fab, List, Right, Segment } from 'native-base';

import React from 'react';
//import react in our code.

import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
//import all the components we are going to use.

//import Formbppermanant from './FormBPP.js';

//import Formbpoccasionnel from './FormBPO.js';


export default class AddBP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "Restaurant",
      frequence: "BPP",
      nom: null,
      description: null,


    }

  }

  updateValue = (text, field) => {
    this.setState({
      [field]: text,

    })
  }

  submit = (dataBP) => {
    const { nom, type, frequence, description } = this.state
    let bonplan = {};
    bonplan.nom = nom
    bonplan.type = type
    bonplan.frequence = frequence
    bonplan.description = description
    if (nom != null && description != null) {
      this.props.navigation.navigate('AddBP2', { dataBP: dataBP })
    }
    else {
      Alert.alert('Erreur', 'Veuillez renseigner des informations sur votre bon plan', [{ text: 'Continuer' }])
    }
  }
  render() {
    let dataBP = this.state;
    return (
      <Container
        style={styles.container}>
        <Header
          style={{ backgroundColor: '#2B3B4B' }}
          transparent={true}>
          <Body>
            <Text style={{ color: 'white' }}>Ajouter un bon plan</Text>
          </Body>
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
          <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/01/19/15/07/cocktails-1149171_960_720.jpg" }} style={{ height: 150, flex: 1, justifyContent: 'center' }} />
          <Card style={styles.mb}>
            <CardItem  >
              <Body>
                <Text>Quel est le type de votre bon plan ?</Text>
                <Picker
                  note
                  mode="dropdown"
                  style={{ color: '#8CC7B1', width: 300 }}
                  selectedValue={this.state.type}
                  onValueChange={(text) => this.updateValue(text, 'type')}
                  placeholder="Selectionner un type de bon plan ?"

                >
                  <Picker.Item label="Restaurant" value="Restaurant" />
                  <Picker.Item label="Application" value="Application" />
                  <Picker.Item label="Evenement" value="Evenement" />
                  <Picker.Item label="Autre" value="Autre" />
                </Picker>
              </Body>
            </CardItem>
            <CardItem >
              <Body>
                <Text>Ce bon plan est-il permanent ou occasionnel ?</Text>
                <Picker
                  note
                  mode="dropdown"
                  selectedValue={this.state.frequence}
                  style={{ color: '#8CC7B1', width: 300 }}
                  onValueChange={(text) => this.updateValue(text, 'frequence')}

                >
                  <Picker.Item label="Bon plan permanent" value="Permanent" />
                  <Picker.Item label="Bon plan occasionnel" value="Occasionnel" />
                </Picker>
                <TextInput
                  //style={styles.inputBox}
                  placeholder="Saisissez le bon plan"
                  placeholderTextColor="#2B3B4B"
                  onChangeText={(text) => this.updateValue(text, 'nom')}
                  autoCapitalize="none"
                />
                <TextInput
                  //style={styles.inputBox}
                  placeholder="Saisissez votre description"
                  placeholderTextColor="#2B3B4B"
                  multiligne={true}
                  numberOfLines={5}
                  onChangeText={(text) => this.updateValue(text, 'description')}
                />
              </Body>
            </CardItem>

            <Button
              title="Continuer"
              backgroundColor='#2B3B4B'
              style={{ justifyContent: 'center', alignItems: 'center' }}
              color='#FFFFFF'
              onPress={() => this.submit(dataBP)}>
              <Text style={{ color: 'white' }}>Valider</Text>
            </Button>
          </Card>
        </Content>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
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
    right: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  mb: {
    margin: 30
  }
});

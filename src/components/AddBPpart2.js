 //This is an example code to understand Modal//
 import { Container, Content,Button, Header, Body,Card,Left,CardItem,Radio,ListItem,Picker,PickerItem, Icon,Tab,Tabs,Footer,Fab,List,Right,Segment } from 'native-base';

 import React from 'react';
 //import react in our code.
 
 import { Modal, View, Text,StyleSheet,TouchableOpacity,TextInput,ImageBackground,Image } from 'react-native';
 //import all the components we are going to use.
 
 import Formbppermanant from './FormBPP.js';
 
 import Formbpoccasionnel from './FormBPO.js';

 
 export default class AddBP extends React.Component {
  constructor(props){
    super(props);
 
    this.state = {
       text: null,
       selected: "key1",
       BP:"BPP"

    }
    
 }
 onValueChange(value) {
    this.setState({
      selected: value
    })}

    onValueChangeBP(type) {
      this.setState({
        BP: type
      })}

    

     render(){
         return(
            <Container 
            style={styles.container}> 
                <Header 
                style={{backgroundColor:'#2B3B4B'}}
                transparent = {true}>
                    <Body>
                        <Text style={{color:'white'}}>Ajouter un bon plan</Text>
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
                <Image source={{uri: 'https://cdn.pixabay.com/photo/2016/01/19/15/07/cocktails-1149171_960_720.jpg'}} style={{height: 150, flex: 1,justifyContent:'center'}}/>
                <Card style={styles.mb}>
            <CardItem  >
              <Body>
                <Text>Quel est le type de votre bon plan ?</Text>
                <Picker
              note
              mode="dropdown"
              style={{ width: 300 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
              placeholder="Selectionner un type de bon plan ?"
              itemStyle={{ color: "#2B3B4B" }}

            >
              <Picker.Item label="Restaurant" value="key0" />
              <Picker.Item label="Application" value="key1" />
              <Picker.Item label="Autre" value="key2" />
            </Picker>
            </Body>
            </CardItem>
            <CardItem >
            <Body>
            <Text>Ce bon plan est-il permanent ou occasionnel ?</Text>
            <Picker
              note
              mode="dropdown"
              selectedValue={this.state.BP}
              style={{ width: 300 }}
              onValueChange={this.onValueChangeBP.bind(this)}
              itemStyle={{ color: "#2B3B4B" }}

            >
              <Picker.Item label="Bon plan permanent" value="BPP" />
              <Picker.Item label="Bon plan occasionnel" value="BPO" />
            </Picker>
              </Body>
            </CardItem>
          </Card>
          <Button
                    title="Valider"
                    backgroundColor='#2B3B4B'
                    color='#FFFFFF'
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Valider</Text>
            </Button>
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
      right:20,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0
      }
    },
    mb: {
      margin: 30    }
  });
  
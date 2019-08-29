import React from 'react';

import { Container, Left, Body, Picker,Tab,DatePicker,Radio,Fab,ListItem,Right,Segment } from 'native-base';
import { Modal, View, Text,Button, StyleSheet,TextInput,ImageBackground } from 'react-native';


export default class Formbpoccasionnel extends React.Component {

    constructor(props){
        super(props);
     
        this.state = {
           text: null,
            selected: "key1",
            chosenDate: new Date(),
        }
    this.setDate = this.setDate.bind(this);
     }

     setDate(newDate) {
      this.setState({ chosenDate: newDate });
    }

    onValueChange(value) {
      this.setState({
        selected: value
      })}

    render(){
        return(
            <Container>

<Body>
<ImageBackground
                style={styles.imgBackground} source={require('../../assets/fond2.png')}>
           

            <Text style={styles.text}>Formulaire à remplir</Text>
           
                <TextInput style={styles.inputBox}
                placeholder="Titre" 
                placeholderTextColor="#2B3B4B"
                textAlignVertical={"top"}/>
<Text> Type de bons plans</Text>
<Picker
              note
              mode="dropdown"
              style={{ width: 200 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Restaurant" value="key0" />
              <Picker.Item label="Application" value="key1" />
              <Picker.Item label="Abonnement" value="key1" />
              <Picker.Item label="Autre" value="key2" />
            </Picker>

<View>
<Text>Date de début :{this.state.chosenDate.toString().substr(4, 12)}</Text>

  <DatePicker
            defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>Date de fin : {this.state.chosenDate.toString().substr(4, 12)}</Text>
  <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
  </View>
                <TextInput style={styles.inputBox}
                placeholder="Adresse" 
                placeholderTextColor="#2B3B4B"
                textAlignVertical={"top"}
 />
            <TextInput style={styles.textarea} 
                placeholder="Description" 
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text} 
                placeholderTextColor="#2B3B4B"
                textAlignVertical={"top"}
                    autoCorrect
                />
          </ImageBackground>


</Body>

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
    marginVertical: 10,
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
  
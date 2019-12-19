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
      dataBP: this.props.navigation.state.params.dataBP

    } 

 }

    urlImageBP(params){
      if(params.type=="Restaurant"){
        this.setState({
          dataBP:{
            urlImage:"https://cdn.pixabay.com/photo/2016/01/19/15/07/cocktails-1149171_960_720.jpg"
          }
        })
      }
      if(params.type=="Application"){
        this.setState({
          dataBP:{
            urlImage:"https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_960_720.jpg"
          }
        })
      }
      if(params.type=="Evenement"){
        this.setState({
          dataBP:{
            urlImage:"https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645_960_720.jpg "
          }
        })
      }
      if(params.type=="Autre"){
        this.setState({
          dataBP:{
            urlImage:"https://cdn.pixabay.com/photo/2016/11/29/13/42/light-bulbs-1869945_960_720.jpg"
          }
        })
      }
      return(params.urlImage)
    }

    componentWillMount = () => {
     // urlImageBP(this.state.dataBP);
    console.debug("this.state.dataBP");
     }

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
                
                
                
                <Image source={{uri: "https://cdn.pixabay.com/photo/2016/11/29/13/42/light-bulbs-1869945_960_720.jpg"}} style={{height: 150, flex: 1,justifyContent:'center'}}/>
                <Card style={styles.mb}>
            <CardItem  >
              <Body>
                <Text>Quel est le type de votre bon plan ?</Text>
                
            </Body>
            </CardItem>
            <CardItem >
            <Body>
            <Text>Ce bon plan est-il permanent ou occasionnel ?</Text>
          
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
  
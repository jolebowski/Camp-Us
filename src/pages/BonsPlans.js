import React  from 'react'
import { Container, Content, Header, Body, Icon,Footer, Text,Button, Right } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet,View,FlatList,Dimensions,TouchableOpacity } from 'react-native';

import Menu from '../components/Menu';

const data = [
    {
        key:'Japonais'
    },
    {
        key:'Apple'
    },
    {
        key:'Lynda'
    },
    {
        key:'Voltaire'
    }
];


export default class BonsPlans extends React.Component{


      renderItem=({item,index}) => {
          return(
            <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('DetailBP',{data: item.key})}>
                <Text style={{color:'#2B3B4B',fontsize:16}}>{item.key}</Text>
            </TouchableOpacity>
          );
      };
     
    render(){

        return (
        <Container >
            <Header 
            style={{backgroundColor : '#2B3B4B'}} 
            transparent = {true}>
                <Menu navigation={this.props.navigation}/>
                <Body>
                    <Text 
                    style={{color:'white'}}>
                    Les Bons plans
                    </Text>
                </Body>
            </Header>
            <Content>
                <FlatList
                data={data}
                style={styles.container}
                renderItem={this.renderItem}
                numColumns= {2}
                />
            </Content>
            <Footer 
            style={{backgroundColor:'#2B3B4B'}}>
                <Right>
                    <View>
                        <Button 
                        transparent
                        onPress={() => this.props.navigation.navigate('AddBP1')}>
                            <Icon name="add" />
                        </Button>
                    </View>
                </Right>
            </Footer>
        </Container>


        )
        
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item:{
        backgroundColor:'#8CC7B1',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        margin:1,
        height: Dimensions.get('window').width/4
    }
});
import {Left, Icon, Button } from 'native-base';
import React  from 'react'

export default class Menu extends React.Component {

    render() {
        return ( 
            <Left>
                 <Button transparent
                    onPress = {() => this.props.navigation.openDrawer()}
                    >
                    <Icon name='md-menu' style={{color:'#8CC7B1'}}/>
                </Button>   
                </Left>
        
               )
        }
}
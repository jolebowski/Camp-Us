{/* Menu component */ }
{/* To open the drawer navigation */ }
import { Left, Icon, Button } from 'native-base';
import React, { Component } from 'react'

export default class Menu extends Component {

    render() {
        console.warn(this.props.navigation, 'okok')
        return (
            <Left>
                <Button
                    transparent
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name='md-menu' style={{ color: '#8CC7B1' }} />
                </Button>
            </Left>
        )
    }
}
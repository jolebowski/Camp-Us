import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class CoursComponent extends Component {
  render(){
    
    const bgColor = this.props.data.bgColor;
    let objStyle = {
        margin: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 6,
        backgroundColor: bgColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
    };
    
    // const dataFromParent = JSON.parse(this.props.data);
    return (
        <View style={objStyle}>
            {/* <Text>Welcome {this.props.data}</Text> */}

            <View style={styles.item}>
                <Text>{this.props.data.from}</Text>
                <Text>{this.props.data.to}</Text>
            </View>
            <Text>{this.props.data.coursTitle}</Text>
            <Text style={styles.item}>{this.props.data.room}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    box: { 
        margin: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        
    },
    item: {
        // marginLeft: 5,
        marginRight: 5,        
        // color: '#ffffff',
        justifyContent: 'center',
    }
});

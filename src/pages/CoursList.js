import React, { Component } from 'react';
import { StyleSheet, Button, View, ScrollView } from 'react-native';
import CoursComponent from '../components/CoursComponent';
import CalendarComponent from  '../components/CalendarComponent';

export default class CoursList extends Component {

    static navigationOptions = {
        headerTitle: 'Today\'s cours',
    };
    
    render(){
        // #region fakedata
        const dataCours = [
            {
                from: '9h00',
                to: '13h00',
                coursTitle: 'React Js',
                room: 'Salle 07',
                bgColor: '#56c8d8'
            },
            {
                from: '14h00',
                to: '17h45',
                coursTitle: 'React Js',
                room: 'Salle 06',
                bgColor: '#006978'
            },
            {
                from: '9h00',
                to: '13h00',
                coursTitle: 'React Js',
                room: 'Salle 06',
                bgColor: '#56c8d8'
            },
            {
                from: '14h00',
                to: '17h45',
                coursTitle: 'React Js',
                room: 'Salle 07',
                bgColor: '#006978'
            },
            {
                from: '9h00',
                to: '13h00',
                coursTitle: 'API,GraphQL',
                room: 'Salle 06',
                bgColor: '#56c8d8'
            },
            {
                from: '14h00',
                to: '17h45',
                coursTitle: 'API,GraphQL',
                room: 'Salle 06',
                bgColor: '#006978'
            }
        ];
        // #endregion

        const tab = [];
        let i = 0;
        for(let item of dataCours){
            tab.push(<CoursComponent key={i} data={item}/>);;
            i++;
        }
        
        return (
            <ScrollView style={styles.scroolContainer}>
                <View style={styles.container}>
                    <CalendarComponent />
                    {tab}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroolContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: "wrap",
        padding: 2,
    },
    
});

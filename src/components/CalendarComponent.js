import React, { Component } from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment' ;

export default class CalendarComponent extends Component {

    constructor(props){
        super(props);
        this.state = { 
            isCalendarShowing: false,
            selectedDate: moment().format('YYYY-MM-DD')
        };
    }

    getDateFromCalendar = (day) => {
        this.setState({
          isCalendarShowing: false,
          selectedDate: day.dateString
        });
    }

    showCalendar = () => {
        this.setState((prevState) => {
            return {isCalendarShowing: !prevState.isCalendarShowing};
        });
    }
    render(){
        return(
            <View>
                <Button title={this.state.selectedDate} color="#bf360c" style={styles.box} onPress={this.showCalendar}/>
                {this.state.isCalendarShowing  && 
                    <Calendar 
                        style={styles.calendarStyles} 
                        theme={{
                            calendarBackground: 'rgba(255, 255, 255, 1)',
                            backgroundColor: 'rgba(255, 255, 255, 1)', 
                            selectedDayBackgroundColor: '#00adf5',
                        }} 
                        onDayPress={(day) => {this.getDateFromCalendar(day)}}/>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        margin: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 8,
        backgroundColor: '#bf360c',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center"
    },
    calendarStyles: {
        borderWidth: 1,
        borderColor: 'gray',
        position: 'relative',
        zIndex: 99,
        marginTop: 10
    },
    
})
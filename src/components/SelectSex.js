import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default SelectSex = () => {
    return (
        <RNPickerSelect
            placeholder={{ label: 'Selectionnez votre sexe', value: 'selectionnez votre école' }}
            onValueChange={(value) => value}
            items={[
                { label: 'Homme', value: 'H' },
                { label: 'Femme', value: 'F' },
            ]}
            style={{
                ...styles,
                placeholder: {
                    color: '#8CC7B1',
                    fontWeight: 'bold',
                },
            }}
        />
    );
};

const styles = StyleSheet.create({
    inputIOS: {
        width: 300,
        width: 288,
        height: 46,
        borderRadius: 23,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
        borderColor: '#2B3B4B',
        borderWidth: 1,
    },
})
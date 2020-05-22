import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, View, Text } from 'react-native'




export default Weather = ({weather, temperature}) => {
    return (
        <View style={styles.weatherContainer}>
            <Entypo name="icloud" size={100} color="blue"/>
            <Text style={styles.text}>{weather}</Text>
            <Text style={styles.temperature}>{temperature}° F</Text>
        </View> 
    )
} 







const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    text: {
        fontSize: 50
    },
    temperature: {
        fontSize: 30
    }

})






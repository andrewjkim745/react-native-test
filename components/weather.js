import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, ScrollView, Text } from 'react-native'




export default Weather = ({weather, temperature}) => {
    return (
        <ScrollView contentContainerStyle={styles.weatherContainer}>
            <Entypo name="icloud" size={50} color="blue"/>
            <Text style={styles.text}>{weather}</Text>
            <Text style={styles.temperature}>{temperature}° F</Text>
        </ScrollView> 
    )
} 







const styles = StyleSheet.create({
    weatherContainer: {
        flex: 4 ,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    text: {
        fontSize: 20
    },
    temperature: {
        fontSize: 20
    }

})






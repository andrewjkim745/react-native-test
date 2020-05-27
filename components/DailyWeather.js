import React from 'react'
import { View, Text, StyleSheet } from 'react-native'




export default DailyWeather = ({ minTemp, maxTemp, dayTemp, feelsLike, dailyWeather }) => {
    return (
        <View style={styles.dailyWeatherContainer}>       
            <Text>{dailyWeather}</Text>
            <Text>{dayTemp}</Text>
            <Text>{minTemp}</Text>
            <Text>{maxTemp}</Text>
            <Text style={styles.Text}> Feels Like {feelsLike} ° F</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    dailyWeatherContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    Text: {
        fontSize: 30
    }
})
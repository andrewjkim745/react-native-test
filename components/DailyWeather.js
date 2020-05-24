import React from 'react'
import { View, Text, StyleSheet } from 'react-native'




export const DailyWeather = ({ minTemp, maxTemp, dayTemp, feelsLike, weather }) => {
    return (
        <View style={styles.dailyWeatherContainer}>       
        
            <Text>{dayTemp}</Text>
            <Text>{minTemp}</Text>
            <Text>{maxTemp}</Text>
            <Text>{feelsLike}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    dailyWeatherContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
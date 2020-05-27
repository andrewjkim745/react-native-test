import React from 'react'
import { View, Text, StyleSheet } from 'react-native'







export default HourlyWeather = ({ hourlyWeather, windSpeed, hourlyTemperature }) => {
    return (
        <View style={styles.hourlyWeatherContainer}>
            <Text>{hourlyWeather}</Text>
            <Text>{windSpeed}</Text>
            <Text>{hourlyTemperature}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    hourlyWeatherContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen'
    }
})
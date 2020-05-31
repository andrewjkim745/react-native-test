import React from 'react'
import { View, Text, StyleSheet } from 'react-native'




export default DailyWeather = ({ minTemp, maxTemp, dayTemp, feelsLike, dailyWeather }) => {
    return (
        <View style={styles.dailyWeatherContainer}>       
            <Text style={styles.Text}>{dailyWeather}</Text>
            <Text style={styles.Text}>{dayTemp}</Text>
            <Text style={styles.Text}>{minTemp}</Text>
            <Text style={styles.Text}>{maxTemp}</Text>
            <Text style={styles.Text}> Feels Like {feelsLike} ° F</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    dailyWeatherContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        flexWrap: 'wrap',
        flexDirection: 'row',
        overflow: 'scroll'
    },
    Text: {
        fontSize: 20
    }
})
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, View } from 'react-native'




export default Weather = (props) => {
    return (
        <View style={styles.weatherContainer}>
            <Entypo name="icloud" size={24} color="black"/>
            <Text>{props.weather}</Text>
            <Text>{props.temperature}</Text>
        </View>

    )
} 







const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }

})






import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { StyleSheet, View } from 'react-native'




export default Weather = () => {
    return (
        <View style={styles.weatherContainer}>
            <Entypo/>
        </View>

    )
}





const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1
    }

})






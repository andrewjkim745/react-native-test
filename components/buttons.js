import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


export const StateButtons = ({ current, hourly, daily, onPress }) => {
    return (
        <View style={styles.buttonsContainer}>
        <Button
        style={styles.buttons}
        title='View Current Weather'
        onPress={current}
        />
        <Button
        style={styles.buttons}
        title='View Hourly Weather'
        onPress={hourly}
        />
        <Button
        style={styles.buttons}
        title='View Daily Weather'
        onPress={daily}
        />
        </View>
    )
}



const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1
    },

    buttons: {
        paddingTop: 20,
        fontSize: 30
    }
})
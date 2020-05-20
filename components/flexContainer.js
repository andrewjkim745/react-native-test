import React from 'react'

import { View, Text, StyleSheet } from 'react-native'




export default FlexContainer = () => {
    return (
        <View style={styles.parentContainer}>
            <View style={styles.testContainer1}/>
            <View style={styles.testContainer2}/>
        </View>
    )
}





const styles = StyleSheet.create({


    parentContainer: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    testContainer1: {
        flex: 1,
        backgroundColor: 'powderblue'
    },
    testContainer2: {
        flex: 2,
        backgroundColor: 'steelblue'
    }
})
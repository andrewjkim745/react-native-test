import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


export const stateButtons = ({ current, hourly, daily, onPress }) => {
    return (
        <View >
        <Button
        title='Current'
        onPress={current}
        />
        <Button
        title='Hourly'
        onPress={hourly}
        />
        <Button
        title='Daily'
        onPress={daily}
        />
        </>
    )
}
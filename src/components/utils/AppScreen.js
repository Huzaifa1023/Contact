import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AppScreen = ({style,children}) => {
    return (
        <View style={[styles.container,style]}>
            {children}
        </View>
    )
}

export default AppScreen

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1
    }
})

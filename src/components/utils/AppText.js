import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../assets/theme/colors'

const AppText = ({title,textColor="#000",size="medium"}) => {
    const fontSize = {
        ["small"]:15,
        ["medium"]:18,
        ["large"]:22,
    }
    return (
            <Text style={[styles.text,{color:textColor,fontSize:fontSize[size]}]}>{title}</Text>
    )
}

export default AppText

const styles = StyleSheet.create({
    
})

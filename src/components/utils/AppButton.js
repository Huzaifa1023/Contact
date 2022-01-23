import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/theme/colors'
import AppText from './AppText'

const AppButton = ({title,loading=false,disabled,type="primary",style,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.wrapper,{backgroundColor: disabled ? colors.grey : colors[type]},style]}>
            <View style={styles.btnContainer}>
                {loading && <ActivityIndicator color={colors.grey} style={{marginRight:5}}/>}
                {title && <AppText textColor='#fff' title={title}/>}
            </View>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    wrapper:{
        height:42,
        marginVertical:5,
        borderRadius:4,
        width:"100%"
    },
    btnContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
    }
})

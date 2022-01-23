import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import colors from '../../assets/theme/colors';

const AppInput = ({label,icon,value,onChangeText,style,error,...props}) => {
    const [focused,setFocus] = useState(false);
    const getBorderColor = ()=>{
        if(focused){
            return colors.primary
        }
        else if (error){
            return colors.danger
        }else {
            return colors.grey;
        }
        
    }
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.inputWrapper,{borderColor:getBorderColor()}]}>
                {icon && icon}
                <TextInput
                    style={[styles.inputField,style]}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={()=> setFocus(true)}
                    {...props}
                />
            </View>
            { <Text>{error}</Text>}
        </View>
    )
}

export default AppInput

const styles = StyleSheet.create({
    inputContainer:{
        marginVertical:5,
    },
    inputWrapper:{
        height:42,
        borderColor:colors.grey,
        borderWidth:2,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:5,
        marginVertical:5,
        borderRadius:4
    },
    inputField:{
        flex:1,
    }
})

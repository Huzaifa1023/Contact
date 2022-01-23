import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import colors from '../../assets/theme/colors';

const AppMessage = ({title,handleMessgae,type,icon}) => {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:colors[`${type}Light`]}]}>
        <View style={styles.icon}>
            {icon && icon}
        </View>
        <AppText title={title} textColor={colors[type]}/>
    </TouchableOpacity>
  );
};

export default AppMessage;

const styles = StyleSheet.create({
    container:{
        position:'relative',
        height:42,
        borderRadius:4,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        position:'absolute',
        top:2,
        right:5
    }
});

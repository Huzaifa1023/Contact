import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LOGIN, REGISTER } from '../constants/routes'
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';

const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName={LOGIN} >
            <AuthStack.Screen name={LOGIN} component={LoginScreen} options={{headerShown:false}} />
            <AuthStack.Screen name={REGISTER} component={SignUpScreen} options={{headerShown:false}} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator

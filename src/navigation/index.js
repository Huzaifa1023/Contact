import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import { useSelector } from 'react-redux';
const AppNavigation = () => {
  const {auth:{isLoggedIn}} = useSelector((state)=> state);
    return (
    <NavigationContainer>
      {isLoggedIn ? <HomeNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
    )
}

export default AppNavigation

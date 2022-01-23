import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CONTACTS_LIST, CONTACT_DETAIL, CREATE_CONTACT, SETTINGS } from '../constants/routes';
import ContactScreen from '../screens/Contacts';
import ContactDetailScreen from '../screens/ContactDetails';
import CreateContactScreen from '../screens/ContactDetails';
import SettingsScreen from '../screens/Settings';

const HomeStack = createNativeStackNavigator();
const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName={CONTACTS_LIST}>
          <HomeStack.Screen name={CONTACTS_LIST} component={ContactScreen}/>  
          <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetailScreen}/>  
          <HomeStack.Screen name={CREATE_CONTACT} component={CreateContactScreen}/>  
          <HomeStack.Screen name={SETTINGS} component={SettingsScreen}/>  
        </HomeStack.Navigator>
    )
}

export default HomeNavigator

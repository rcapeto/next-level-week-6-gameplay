import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
   return(
      <Navigator
         screenOptions={{
            headerShown: false,
            cardStyle: {
               backgroundColor: 'transparent'
            }
         }}
      >
         <Screen component={Login} name="Login"/>
         <Screen component={Home} name="Home"/>
      </Navigator>
   );
}